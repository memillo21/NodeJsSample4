const htttp = require('http');

const handleserver = function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'}) ;
    res.write('<h1>hola mundo desde Node.Js 2</h1>');
    res.end();
}

htttp.createServer(handleserver).listen(3000);
