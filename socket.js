const express = require("express");
const app = express();
const socketio = require("socket.io");
//This is used to use the socket.io.

app.get("/", (req, res) => {
    res.sendfile(__dirname + "/socket.html")

});

const server = app.listen(3000, () => {
    console.log("Server Running @localhost:3000")
});

const io = socketio.listen(server);

io.sockets.on("connection", function (socket) {
    //This is listening to the request from the client. It has to be "Connection" and not anything else.
        socket.emit("data_to_client", "Hello from Server!!");
    //socket.emit() helps in emitting the event back to the client. 
    socket.on("data_to_server", function(data) {
        io.sockets.emit("data_to_client", data);
    });
})
