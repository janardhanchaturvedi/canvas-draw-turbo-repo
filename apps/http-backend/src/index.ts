import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
const app = express();
import { createRoomSchema, siginSchema, userSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
app.use(express.json());
app.post("/signup", async (req, res) => {
  const parsedData = userSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }

  try {
    const user = await prismaClient.user.create({
      data: {
        name: parsedData.data.name,
        email: parsedData.data?.username,
        password: parsedData.data.password,
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (error) {
    res.status(411).json({
      message: "User is already exists",
    });
  }
});

app.post("/signin", async (req, res) => {
  const parseData = siginSchema.safeParse(req.body);
  if (!parseData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parseData?.data?.username,
      password: parseData?.data?.password,
    },
  });

  if (!user) {
    res.status(403).json({
      message: "Not Authorized",
    });
    return;
  }
  const token = jwt.sign(
    {
      userId: user?.id,
    },
    JWT_SECRET
  );
  res.json({
    token,
  });
});

app.post("/room", middleware, async (req, res) => {
  //db call
  const parsedData = createRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    // @ts-ignore
    const userId = req.userId;
    const room = await prismaClient.room.create({
      data: {
        slug: parsedData?.data?.name,
        adminId: userId,
      },
    });

    res.json({
      roomId: room.id,
    });
  } catch (error) {
    res.status(411).json({
      message: "Room already Exist",
    });
  }
});

app.get("/chats/:roomId", async (req, res) => {
  const roomId = Number(req.params.roomId);
  const messages = await prismaClient.chat.findMany({
    where: {
      roomId: roomId,
    },
    orderBy: {
      id: "desc",
    },
    take: 50,
  });

  res.json({
    messages,
  });
});

app.get("/room/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
      where: {
        slug,
      },
    });

    res.json({
      room,
    });
  } catch (error) {
    console.log("🚀 ~ app.get ~ error:", error);
  }
});

app.listen(3005, () => {
  console.log("The Http Backend server is started on the 3005");
});
