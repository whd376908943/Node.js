var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' });


io.on('connection', function(socket){
  console.log(`a user connected ${socket.id}`);
  socket.on('chat message',function(msg){
    io.emit('chat message',socket.id,msg);    
  })
  socket.on('disconnect',function(){
    console.log('user disconnected');
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

