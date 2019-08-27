//importing socket.io-client
const io=require("socket.io-client");

const socket=io("http://localhost:3000");
socket.on("connect",()=>{
    console.log("socket.io client connceted!");
});

//handling custom event triggered by server
socket.on("chat-message",(message,id)=>{
    console.log(`${id}: ${message}`);
});

//getting the chat data on data events to brodcast to all connected clients
process.on("data",data=>{
    //triggering servers chat event and passing data
    socket.emit("chat",data.toString().trim());

});