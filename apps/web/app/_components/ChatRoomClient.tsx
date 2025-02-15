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
  console.log("🚀 ~ messages:", messages);

  // Ensure `messages` is an array before setting it in state
  const [chats, setChats] = useState<Message[]>(Array.isArray(messages) ? messages : []);
  console.log("🚀 ~ chats:", chats);

  const [currentMessage, setCurrentMessage] = useState("");
  console.log("🚀 ~ currentMessage:", currentMessage);

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
          console.log("🚀 ~ useEffect ~ parsedData:", parsedData);

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
      console.log("🚀 ~ handleSendMessage ~ data:", data);
      socket?.send(data);
      setCurrentMessage(""); // Clear the input field after sending
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
