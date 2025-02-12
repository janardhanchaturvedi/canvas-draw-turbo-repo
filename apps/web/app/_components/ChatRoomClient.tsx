import { useEffect, useState } from "react";
import { useSocket } from "../_hooks/useSocket";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string[] };
  id: string;
}) {
  const [chats, setChats] = useState(messages);
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
        const parsedData = JSON.parse(event.data);
        if (parsedData.type == "chat") {
          setChats((prevChats: any) => [
            ...prevChats,
            { message: parsedData.message },
          ]);
        }
      };
    }
  }, [socket, loading]);

  return (
    <>
      {messages?.map((m) => <div> {m.message}</div>)}
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      ></input>
      <button onClick={() => {
        socket?.send( )
      }}>Send Message </button>
    </>
  );
}
