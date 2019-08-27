/**
 * This is simple socket server chat app using npm's socket.io package
 * install socket.io  package using npm i socket.io
 * socket.io works with http modules so we also need to import http module
 * install socket.io-client to be used as client for this app 
 * @run in order to run this  app first of all run socket-server in one terminal split
 * split the terminal in vs code using split button and run node socket-client in two different terminal 
 * now send message throgh socket-client screen and that will be brodcasted to all other clients  
 */

 //import http module and socket.io modules 
 const http= require("http");
 const socketIO=require("socket.io");

 //create the server
 const server=http.createServer().listen(3000);
 const io=socketIO(server);

 //handling connection event with callback function
 io.on("connection",socket=>{
    console.log(`${io.engine.clientsCount} connections..`);

    //handling chat event
    io.on("chat",message=>{
        console.log(`${socket.id}: ${message}`);
        //trigger custom event with custom parameters
        io.sockets.emit("chat-message",message,socket.id);
    });

    //handling disconnect event
    io.on("disconnect",()=>{
        console.log(`disconnect: ${socket.id}`);
    });
 });

 console.log('Socket Server');