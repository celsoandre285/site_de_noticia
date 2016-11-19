
//importando biblioteca http
var http = require('http');

//criando o servidor
var server = http.createServer(function (req, res) {
	// recuperando a requisição url
	var categoria = req.url;
	
	console.log(categoria);
	//definindo a rota
	if (categoria == '/moda') {
		
		res.end("<html><body><h1>site de teste Moda</h1></body></html>");
		
	} else if(categoria == '/tecnologia'){
		
		res.end("<html><body><h1>site de teste tecnologia</h1></body></html>");

	}	else {
		
		res.end("<html><body><h1>site de teste home</h1></body></html>");
	
	}
	
	
	
});
// colocar o servidor escutando na porta 3000
server.listen(3000);