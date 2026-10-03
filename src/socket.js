// socket.js
import { io } from "socket.io-client";

const options = {
};

const socket = io(process.env.REACT_APP_BACKEND_URL || "http://localhost:5050", options);

export const initSocket = () => {
  return socket;
};

