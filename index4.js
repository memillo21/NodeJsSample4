const colors = require('colors');
const express =  require('express');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>hola mundo desde Node.Js con Express</h1>');
});

server.listen(3000, function () {
    console.log('Server on port 3000'.green);
});