const io = require('socket.io-client')();

let socket = io.connect('http://localhost:3000/about');

socket.on('welcome', (msg) => {
    console.log(msg);
});

socket.emit('about')