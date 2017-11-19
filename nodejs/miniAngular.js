var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('./index.html', function(err, file){
		var name = 'AYAN';
		var a;
		var fs = file.toString();
		var v = fs.match(/[^\{\}]+(?=\})/g);
		for(var i = 0; i < v.length; i++){
			a = eval(v[i]);
			fs = fs.replace('{' + v[i] + '}', a);
		}
		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.write(fs);
		res.end();
	});
}).listen(8080);
