var http = require('http');
var manejador = function(solicitud, respuesta){
	console.log('Hello word');
	respuesta.end();
};
var servidor = http.createServer(manejador);
servidor.listen(8080);
