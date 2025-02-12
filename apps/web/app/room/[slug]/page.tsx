import React from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import ChatRoom from "../../_components/ChatRoom";

async function getRoomId(slug: string) {
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
  return response.data.room.id;
}
export default async function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = (await params).slug;
  const roomId = await getRoomId(slug);
  return <ChatRoom id={roomId} />;
}
