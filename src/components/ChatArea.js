// chatarea.js
import React, { useEffect, useState } from "react";
// import { useRecoilValue } from 'recoil';
import ACTIONS from "../Actions";
import "./ChatArea.css";
import Chat from "./Chat";
import Participants from "./Participants";

const ChatArea = ({ socketRef, roomId, currentUsername, clients }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [chatAndPeople, setChatAndPeople] = useState(true);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.RECEIVE_MESSAGE, ({ username, message }) => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { username, message },
        ]);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.RECEIVE_MESSAGE);
      }
    };
  }, [socketRef.current]);

  const sendMessage = () => {
    if (socketRef.current && message.trim() !== "") {
      socketRef.current.emit(ACTIONS.SEND_MESSAGE, { roomId, message });
      setMessage("");
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    // <div className="chat-area-container">
    //   <div className={`chat-popup ${showChat ? 'show' : ''}`}>
    //     <div className="chat-header">
    //       <span className="close" onClick={toggleChat}>&times;</span>
    //       Chat Area
    //     </div>
    //     <div className="chat-body">
    //       {chatMessages.map(({ username, message }, index) => (
    //         <div key={index}>
    //           <strong>{username}:</strong> {message}
    //         </div>
    //       ))}
    //     </div>
    //     <div className="chat-input">
    //       <input
    //         type="text"
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //         placeholder="Type your message..."
    //       />
    //       <button onClick={sendMessage}>Send</button>
    //     </div>
    //   </div>
    //   <div className="chat-toggle" onClick={toggleChat}>
    //     {showChat ? 'Hide Chat' : 'Show Chat'}
    //   </div>
    // </div>
    <>
      <div className="border border-slate-700 m-2 w-[40vw] h-[88vh] rounded-lg p-2 bg-slate-900 flex flex-col">
        <div className="bg-slate-800 p-1 rounded-lg flex items-center justify-between text-sm mb-2">
          <button
            onClick={() => setChatAndPeople(true)}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors text-center ${
              chatAndPeople
                ? "bg-slate-700 text-indigo-300 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setChatAndPeople(false)}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors text-center ${
              !chatAndPeople
                ? "bg-slate-700 text-indigo-300 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Participants ({clients?.length || 0})
          </button>
        </div>
        <div className="border border-slate-700 rounded-lg w-full flex-1 overflow-auto">
          {/* {chatAndPeople ? (
            <Chat
              socketRef={socketRef}
              roomId={roomId}
              currentUsername={currentUsername}
            />
          ) : (
            <Participants />
          )} */}
          <div className={chatAndPeople ? "h-full" : "hidden"}>
            <Chat
              socketRef={socketRef}
              roomId={roomId}
              currentUsername={currentUsername}
            />
          </div>
          <div className={chatAndPeople ? "hidden" : "h-full"}>
            <Participants clients={clients} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatArea;