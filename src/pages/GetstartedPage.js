// import React from "react";
import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";

export default function GetstartedPage() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-slate-900">
        <div className="flex flex-col items-center h-[90vh] justify-center">
          <p className="text-7xl font-bold tracking-tight text-white">
            SYNTEXITY
          </p>
          <div className="text-slate-400 text-xl mt-4">
          <Typewriter
          options = {{
            strings:"A collaborative code editor",
            autoStart: true,
            loop:true
          }}
           />
           </div>
          {/* <p className="text-3xl font-halloween text-white">
            A collaborative code-editor
          </p> */}
          <Link to="/auth">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-3 mt-10 rounded-lg transition-colors">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
