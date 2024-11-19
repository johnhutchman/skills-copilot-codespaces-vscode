// create web server
const http = require('http');
// create a server object:
http.createServer((req, res) => {
    // set the HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});
    // write the response to the client
    res.write('Hello World!'); 
    // end the response
    res.end();
}).listen(8080); // the server object listens on port 8080