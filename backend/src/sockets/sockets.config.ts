import { Server as HTTPServer } from "http";
import { Server } from "socket.io";
import { connectionController } from "./controllers";

function initSockets(server: HTTPServer) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  });

  const onConnection = (socket: any) => {
    console.log("New client connected");

    // connectionController(io, socket);
  };

  io.on("connection", onConnection);
}

export { initSockets };
