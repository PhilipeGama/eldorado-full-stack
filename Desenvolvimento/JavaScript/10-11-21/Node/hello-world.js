const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("<html><head><title>Hello World!</title></head><body><h1>Hello World!</h1></body></html>");
}).listen(8000, '127.0.0.1');

console.log("Rodando na porta 8000");