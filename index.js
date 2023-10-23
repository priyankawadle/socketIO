const express = require("express");
const app = express();
const http = require("http");


const expressServer = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on('connection',function(socket){
  console.log("User connected to socket")
  console.log("server to client data transfer");
// message send
//   setTimeout(()=>{
//   socket.send("sending message from server");
//   },10000)

// real time data send
//   setInterval(()=>{
//   const date = new Date();
//   const time = date.getTime();
//   socket.send(time);
//   },2000)

// custom event creation  
setInterval(()=>{
  const date = new Date();
  const time = date.getTime();
  socket.emit("myEvent",time);
  },2000)


// disconnect method
//   socket.on('disconnect',function(){
//      console.log("User disconnected to socket");
//   })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

expressServer.listen(3002, () => {
  console.log("server running on port 3002");
});