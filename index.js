var http = require('http');


console.log("elo");

http.createServer(function(request, response){
      //tu jest funkcja createserver
      //request =
      response.writeHead(418, ('Content-Type' , 'text/html'));
      response.write("elo");
      response.end();
}) .listen(8080);

