import express from "express";
import cors from 'cors';
import http from "http";
import { Server } from "socket.io";
import { conectarDB } from "./db_connection";
import { env_variables } from "./environment_variables";
import authRouter from "./authentication";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json())

app.get("/", (_req, res) => {
  res.send("Servidor RPG activo");
});

app.use((req,res,next)=>{
  console.log(req.url)
  console.log(req.query)
  console.log(req.originalUrl)
  console.log(req.body)
  next()
})

app.use('/api', authRouter);

io.on("connection", (socket) => {
  console.log("Jugador conectado:", socket.id);

  socket.on("mensaje", (data) => {
    console.log("Mensaje recibido:", data);
    socket.broadcast.emit("mensaje", data);
  });

  socket.on("disconnect", () => {
    console.log("Jugador desconectado:", socket.id);
  });
});

server.listen(env_variables.PORT, async () => {
  console.clear();
  await conectarDB();
  console.log(`Servidor escuchando en http://localhost:${env_variables.PORT}`);
});
