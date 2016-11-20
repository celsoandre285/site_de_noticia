module.exports = function(aplicacao){
	aplicacao.get('/formulario', function (request, response) {
		response.render("admin/form_add_noticia"); 
	});


	aplicacao.post('/noticias/salvar', function (request, response) {
		var noticia = request.body;

		//response.send(noticias); 

		var conexao = aplicacao.config.dbconexao();
		var noticiasModel = aplicacao.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, conexao,function(error, resultado){
			// retorno do resultado
			response.redirect("/noticias"); 
		} );
	});
}

