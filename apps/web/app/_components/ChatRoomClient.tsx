"use client";
import { useEffect, useState } from "react";
import { useSocket } from "../_hooks/useSocket";

export type Message = {
  message: string;
  id: number;
  userId: string;
  roomId: number;
};

export type ChatRoomClientProps = {
  messages: Message[];
  id: string;
};

export function ChatRoomClient({ messages, id }: ChatRoomClientProps) {
  const [chats, setChats] = useState<Message[]>(Array.isArray(messages) ? messages : []);
  const [currentMessage, setCurrentMessage] = useState("");
  const { socket, loading } = useSocket();

  useEffect(() => {
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );

      socket.onmessage = (event) => {
        try {
          const parsedData = JSON.parse(event.data);
          if (parsedData.type === "chat") {
            setChats((prevChats) => [
              ...prevChats,
              {
                message: parsedData.message,
                id: parsedData.id,
                userId: parsedData.userId,
                roomId: parsedData.roomId,
              },
            ]);
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };
    }
  }, [socket, loading, id]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const data = JSON.stringify({
        type: "chat",
        roomId: id,
        message: currentMessage,
      });
      socket?.send(data);
      setCurrentMessage("");
    }
  };

  return (
    <>
      <div>
        {chats?.map((m) => (
          <div key={m.id}> {m.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </>
  );
}
