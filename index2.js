const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on('connection',(socket)=>{
 console.log('data from client to server')
 socket.on('message',(msg)=>{
  console.log(msg)
 })
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index2.html");
});

expressServer.listen(3002, () => {
  console.log("server running on port 3002");
});
