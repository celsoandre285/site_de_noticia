
module.exports = function(aplicacao){
	
	aplicacao.get('/noticia', function (request, response) {
		
		var conexao = aplicacao.config.dbconexao();
		var noticiasModel = aplicacao.app.models.noticiasModel;

			noticiasModel.getNoticia(conexao,function(error, resultado){
			// retorno do resultado
			response.render("noticias/noticia", {noticia:resultado}); 
		} );

		
			
	});

};

