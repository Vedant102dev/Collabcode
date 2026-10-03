import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// import { useSignIn } from "react-auth-kit";
// import useSignIn from "react-auth-kit/hooks/useSignIn";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   const signIn = useSignIn();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        {
          username: username,
          password: password,
        }
      );

      if (response.data) {
        toast.success("login successful")
        console.log("success");
        navigate("/room");
      } else {
        toast.error("failed to login")
        console.log("failed login");
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Request failed with status code:",
          error.response.status
        );
        toast.error("falied to login");
        console.error("Error message:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during request setup:", error.message);
      }
    }
    setIsLoading(false);
  };
  // const handlePassword = (pass) => {
  //   setPassword(pass);
  //   let mask;
  //   for (let i = 0; i < pass.length; i++) {
  //     mask += "*";
  //   }
  //   console.log(pass,mask)
  //   setPassdub(mask);
  // };
  return (
    <form className="flex flex-col items-center" onSubmit={handleLogin}>
      <div className="w-full">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-lg text-base outline-none p-3 w-full bg-slate-700 text-white border border-slate-600 focus:border-indigo-500 placeholder-slate-400"
          placeholder="Username"
          required
        />
      </div>
      <div className="mt-4 w-full">
        <input
          type="password"
          value={password}
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
              //   onClick={handleLogin}
              disabled
            >
              Login
            </button>
          </>
        ) : (
          <>
            <button
              //   onClick={handleLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-6 py-3 mt-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </>
        )}
      </div>
    </form>
  );
}
