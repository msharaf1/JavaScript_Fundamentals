var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(7171);

// var a = document.getElementsByName( <h1>"hello dear programming"</h1>)