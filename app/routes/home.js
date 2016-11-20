module.exports = function(aplicacao){

	aplicacao.get('/', function (request, response) {
		response.render("home/index"); 
	});
}



