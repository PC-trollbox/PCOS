var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

users = {}

app.get('/', function(req, res){
    res.send("PCOS Remote Control Server.<br>There isn't even an error, it's just a Socket.IO server. Come join soon.")
})
app.get('/socket.io/socket.io.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/socket.io/lib/client.js')
})
app.get('/socket.io/socket.io.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/socket.io/lib/client.js')
})


io.on("connection", function (client) {
  client.on("ComputerID", function(id){
      if (users.hasOwnProperty(id) == true) {
        client.emit("errorGetting", "00278")
        return client.disconnect()
      }
      users[id] = {exists: true, client: client.id};
  })
  client.on("disconnect", function(){
    var d = "";
    for (var ids in users){
      if (users[ids].client == client.id) d = ids;
    }
    if (users.hasOwnProperty(d)){
      users[d].exists = false;
      delete users[d];
    }
  })
  client.on("sendJS", function(id, jsf){
    if (users.hasOwnProperty(id) == false) {
       client.emit("errorRet","No such ID.")
    }else{
      io.to(users[id].client).emit("printJS", jsf, client.id)
    }
  })
  client.on("JSresult", function(id, data){
    io.to(id).emit("res", data)
  })
  })
  

http.listen(3000, function(){
console.log('listening on port 3000');
});
