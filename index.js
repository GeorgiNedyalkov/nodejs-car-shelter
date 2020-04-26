const http = require('http');
const port = 3000;

// Create the server
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain' 
    });

    res.write('Hello JS world!');
    res.end();
}).listen(port);