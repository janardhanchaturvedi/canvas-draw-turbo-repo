import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
const app = express();
import { createRoomSchema, siginSchema, userSchema } from "@repo/common/types";

app.post("/signup", (req, res) => {
  const data = userSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }

  res.json({
    userId: "123",
  });
});

app.post("/signin", (req, res) => {
  const data = siginSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

app.post("/room", middleware, (req, res) => {
  //db call
  const data = createRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});
app.listen(3005);
