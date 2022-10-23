import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();

// acessando tudo na pasta public
app.use(express.static(path.join(__dirname, "..", "public")));

// servidor para as rotas
const serverHttp = http.createServer(app);

// reaproveitando o servidor com o socket
const io = new Server(serverHttp);

export { serverHttp, io };
