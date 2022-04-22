const connectUser = () => {
  console.log("New client connected");
};

const disconnectUser = () => {
  console.log("Client disconnected");
};

function connectionController(io: any, socket: any) {
  socket.on("connection", connectUser);
  socket.on("disconnect", disconnectUser);
}

export { connectionController };
