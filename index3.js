const htttp = require('http');

const colors = require('colors');

const handleServer = function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'}) ;
    res.write('<h1>hola mundo desde Node.Js 3</h1>');
    res.end();
}

const server = htttp.createServer(handleServer);

server.listen(3000, function(){
    console.log('Servidor en el puerto 3000 green'.green);
    console.log('Servidor en el puerto 3000 underline.red'.underline.red);
    console.log('Servidor en el puerto 3000 trap'.trap);
    console.log('Servidor en el puerto 3000 inverse'.inverse);
    console.log('Servidor en el puerto 3000 rainbow'.rainbow);
});
