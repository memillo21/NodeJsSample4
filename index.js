const htttp = require('http');

htttp.createServer(function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'}) ;
    res.write('<h1>hola mundo desde Node.Js</h1>');
    res.end();
}).listen(3000);
