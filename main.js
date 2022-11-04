const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.end(contents);  
        });
    } else if(request.url === '/ninja') {
        fs.readFile('ninja/ninja.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.end(contents);  
        });
    } else if(request.url === '/dojos/nuevo') {
        fs.readFile('dojos/nuevo/formulario.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.end(contents);  
        });
    } else {
        fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.end(contents);  
        });
    }
});

server.listen(6789);
console.log("Running in localhost at port 6789");