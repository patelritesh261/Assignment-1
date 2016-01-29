///<reference path="_reference.ts"/>
var http = require('http');
var port = process.env.port || 3000;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Assignment demo");
});
server.listen(port, function () {
    console.log("App Stared-------------listening port : " + port);
});
//# sourceMappingURL=server.js.map