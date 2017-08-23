var http = require('http');
var urlParse = require('url');
var mammoth = require('mammoth');
var fs = require('fs');

http.createServer(function(req, res){

	// Parsing URL to redirect user
	var url = urlParse.parse(req.url, true);

	

	// URL = cv/CV/resume/Resume
	if(url.path == '/cv' || url.path == '/resume' || url.path == '/Resume' || url.path == '/CV'){
		
		
		// Convert Doc file to HTML using mammoth
		mammoth.convertToHtml({path : './files/resume/Resume_Anand.docx'}).then(function(result){

			res.writeHead(200, {'Content-Type' : 'text/html'});
			// Write the HTML generated
			res.write(result.value);

			// In case any mammoth conversion messages present
			res.write('<hr><br>Mammoth conversion message - ' + result.messages);
			res.end();
		}).done();
	}
	if(url.path == '/ip' || url.path == '/ipsettings') {
		fs.readFile('./files/ipsettings.txt', function(err, data) {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			if(err){
				// Write the HTML generated
				res.write(err.message);
			}
			else{
				// Write the HTML generated
				res.write(data);
			}
			res.end();
		})
	}
	
	


}).listen(8080);