"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex gap-3">
        <input
          className="bg-blue-50 text-black"
          type="roomId"
          placeholder="Room id"
          onChange={(e) => setRoomId(e.target.value)}
        ></input>
        <button
          className=" text-white cursor-pointer p-5 bg-blue-500"
          onClick={() => router.push(`room/${roomId}`)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
