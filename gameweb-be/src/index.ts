import http from "http";
import { Server } from "socket.io";


//app (express)
import app from "./app";

// config
import { connectDB } from "./config/db/connection";
import { env_variables } from "./config/environment";

// sockets
import { socketHandler } from "./sockets";

// create server
const server = http.createServer(app);

// socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust this to frontend URL
    methods: ["GET", "POST"],
  },
});

socketHandler(io);

const startServer = async () => {
  try {
    console.clear();
    await connectDB();
    server.listen(env_variables.PORT, () => {
      console.log(`🚀 Server running on port ${env_variables.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
