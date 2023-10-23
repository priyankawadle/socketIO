const express = require("express");
const app = express()
const http = require('http')
const { Server } = require('socket.io')

const expressServer = http.createServer((app))
const io = new Server(expressServer);

const buynsp = io.of('/buy')
buynsp.on('connection',(socket)=>{
    buynsp.emit('myEvent','Buy Namespace')
})

const sellnsp = io.of("/sell");
sellnsp.on('connection',(socket)=>{
 sellnsp.emit('myEvent','Sell Namespace')
})

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/namespace.html')
})

expressServer.listen(3002, () => {
    console.log("Socket IO Server is running on port 3002");
});