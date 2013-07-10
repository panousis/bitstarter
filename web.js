var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var welcome = new Buffer(fs.readFileSync("index.html"));
//  response.send("Hi Mark");
  response.send(welcome.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
