import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }).then((res) => {
        toast.success("registered successfully")
        navigate("/room");
        console.log(res);
        setIsLoading(false);
      });
    } catch (error) {
      toast.error("failed to register an account")
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-col items-center" onSubmit={handleRegister}>
      <div className="w-full">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
          placeholder="Username"
          required
        />
      </div>
      <div className="my-4 w-full">
        <input
          type="email"
          onChange={(e) => setMail(e.target.value)}
          className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
          placeholder="Email"
          required
        />
      </div>
      <div className="my-  w-full">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
          placeholder="Password"
          required
        />
      </div>

      <div className="w-full">
        {isLoading ? (
          <>
            <button
              type="submit"
              className="cursor-wait w-full bg-slate-600 text-white font-semibold text-lg px-6 py-3 mt-6 rounded-lg"
              // onClick={handleRegister}
              disabled
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button
              //   onClick={handleLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-6 py-3 mt-6 rounded-lg transition-colors"
            >
              Register
            </button>
            {/* <button
              type="submit"
              className="w-full py-2 text-white font-bold text-lg bg-blue-600 rounded-md text-center
              hover:bg-blue-700
              "
              onClick={handleRegister}
            >
              Register
            </button> */}
          </>
        )}
      </div>
    </form>
  );
}
