import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export function useSocket() {
  const [loading, setLoading] = useState<boolean>(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNGIxYmM4OS02MDJlLTRkMjgtYjMwMS1kZTJhMjM3Y2IwNjQiLCJpYXQiOjE3MzkxMjUzNDZ9.JuefPdOM-J2eKAhKW3TmGxR3jAp9T20egO-AKgEf-wM`);
    if (!ws) return;
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
