///<reference path="_reference.ts"/>
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res, next) {
    res.sendfile(path.join(__dirname, "Public", "index.html"));
});
//route for about page
app.get('/about', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "about.html"));
});
app.listen(port, function () {
    console.log("App Server Started");
});
/*import http=require('http');

var port:number=process.env.port || 3000;

var server:http.Server=http.createServer(
    function(req:http.ServerRequest,res:http.ServerResponse){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Assignment demo");
    }
);

server.listen(port,function(){
    console.log("App Stared-------------listening port : "+port);
})*/ 
//# sourceMappingURL=server.js.map