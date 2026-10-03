import React from "react";
import Client from "./Client";

export default function Participants({ clients }) {
  return (
    <div className="p-4 flex gap-3 flex-wrap justify-start items-start">
      {clients && clients.length > 0 ? (
        clients.map((client) => (
          <Client key={client.socketId} username={client.username} />
        ))
      ) : (
        <p className="text-slate-400 text-xs italic">No participants online</p>
      )}
    </div>
  );
}
