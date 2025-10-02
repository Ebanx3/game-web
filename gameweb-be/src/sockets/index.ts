import {Server, Socket} from "socket.io";

export const socketHandler = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log("New player connected:", socket.id);

        socket.on("mensaje", (data) => {
            console.log("New message received:", data);
            socket.broadcast.emit("message", data);
        });

        socket.on("disconnect", () => {
            console.log("Player disconnected:", socket.id);
        });
    });
};