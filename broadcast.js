const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
io.sockets.emit('myEvent',"broadcasting msg")
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/broadcast.html");
});

expressServer.listen(3002, () => {
  console.log("server running on port 3002");
});
