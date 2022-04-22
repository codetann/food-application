import http from "http";
import express from "express";
import { initSockets } from "@sockets";

function startServer() {
  const app: express.Application = express();
  const server: http.Server = http.createServer(app);

  initSockets(server);

  server.listen(process.env.PORT || 4000, () => {
    console.log(`Server started on port ${process.env.PORT || 4000}`);
  });
}

startServer();
