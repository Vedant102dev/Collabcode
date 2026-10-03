import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="bg-slate-900 w-[100vw] h-[100vh]">
        <div className="flex flex-col items-center h-[90vh] justify-center">
          <p className="text-7xl font-bold tracking-tight text-white">
            SYNTEXITY
          </p>
          <p className="text-xl text-slate-400 mt-2">
            A collaborative code-editor
          </p>
          <Link to="/auth">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-3 mt-8 rounded-lg transition-colors">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
