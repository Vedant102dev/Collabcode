import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <>
      <div className="bg-slate-900 h-[100vh] w-[100vw]">
        <div className="flex flex-col items-center h-[90vh] justify-center">
          <div className="mb-4">
            <Link to="/">
              <p className="text-5xl text-center font-bold tracking-tight text-white">
                SYNTEXITY
              </p>
            </Link>
          </div>
          <div className="bg-slate-800 px-6 py-8 rounded-xl w-[25rem] shadow-lg">
            <form className="flex flex-col items-center">
              <div className="w-full">
                <input
                  type="text"
                  onChange={(e) => setRoomId(e.target.value)}
                  className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
                  placeholder="Room ID"
                  value={roomId}
                  onKeyUp={handleInputEnter}
                  required
                />
              </div>
              <div className="mt-4 w-full">
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
                  placeholder="Username"
                  value={username}
                  onKeyUp={handleInputEnter}
                  required
                />
              </div>
              <div className="w-full">
                <button
                  onClick={joinRoom}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-6 py-3 mt-6 rounded-lg transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="text-slate-300 text-base text-center mt-4">
              <p>
                Don't have a room ID ?{" "}
                <span
                  onClick={createNewRoom}
                  className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 transition-colors"
                >
                  create
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
