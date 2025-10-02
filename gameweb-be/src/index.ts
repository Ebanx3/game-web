import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { connectDB } from "./db_connection";
import { env_variables } from "./environment_variables";
import router from "./router";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server active");
});

app.use((req, _res, next) => {
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.body);
  next();
});

app.use("/api", router);

io.on("connection", (socket) => {
  console.log("New player connected:", socket.id);

  socket.on("mensaje", (data) => {
    console.log("New message received:", data);
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
  });
});

server.listen(env_variables.PORT, async () => {
  console.clear();
  await connectDB();
  console.log(`Server listening at http://localhost:${env_variables.PORT}`);
});
