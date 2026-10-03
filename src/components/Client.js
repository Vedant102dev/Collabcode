import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <div className="flex flex-col items-center p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-indigo-500/50 transition-colors w-20">
      <Avatar name={username} size={42} round="8px" />
      <span className="text-slate-200 text-xs font-medium mt-1.5 truncate max-w-full text-center" title={username}>
        {username}
      </span>
    </div>
  );
};

export default Client;
