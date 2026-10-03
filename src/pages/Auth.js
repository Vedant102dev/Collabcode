import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
export default function Auth() {
  const [showlogin, setShowLogin] = useState(true);
  return (
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
          {/* <p className="my-8 text-center font-halloween text-white text-6xl">
            {showlogin ? "Login" : "Register"}
          </p> */}
          {showlogin ? <Login /> : <Register />}
          <div className="text-slate-300 text-base text-center mt-4">
            {showlogin ? (
              <>
                <p>
                  Don't have an account ?{" "}
                  <span
                    onClick={() => setShowLogin(!showlogin)}
                    className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 transition-colors"
                  >
                    Register
                  </span>
                </p>
              </>
            ) : (
              <>
                <p>
                  Already have an account ?{" "}
                  <span
                    onClick={() => setShowLogin(!showlogin)}
                    className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 transition-colors"
                  >
                    Login
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
