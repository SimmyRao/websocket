const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080});

wss.on("connection", ws => {
    console.log("New client connected!");

    ws.on("message", data => {
        console.log("client has sent us: ${data}");

        ws.send(data.toUpperCase());
    });

    ws.on("close". () => {
        console.log("client has disconnected!");
    });
});
