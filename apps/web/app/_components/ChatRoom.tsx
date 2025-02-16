import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../config";
import { ChatRoomClient } from "./ChatRoomClient";
async function getChats(roomId: string) {
  const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
  console.log("🚀 ~ getChats ~ response:", response.data.messages)
  return response.data.messages;
}
export default async function ChatRoom({ id }: { id: string }) {
  const messages = await getChats(id);
  return <ChatRoomClient id={id} messages={messages} />;
}
