var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	if(req.url.indexOf('favicon.ico') > 0){return ;}
	fs.readFile('./index.html', function(err, file){
		var name = (req.url.indexOf('?') > 0) ? req.url.substring(req.url.indexOf('=') + 1, req.url.length) : '';
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
