var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html') ;
var strbuf= buf.toString();
console.log(strbuf);

app.get('/', function(request, response) {
  response.send(strbuf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
