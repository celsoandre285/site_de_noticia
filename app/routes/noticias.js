
module.exports = function(aplicacao){
	
	aplicacao.get('/noticias', function (request, response) {
		
		var conexao = aplicacao.config.dbconexao();
		var noticiasModel = aplicacao.app.models.noticiasModel;

		noticiasModel.getNoticias(conexao,function(error, resultado){
			// retorno do resultado
			response.render("noticias/noticias", {noticias:resultado}); 
		} );	
	});
};

