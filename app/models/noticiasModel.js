module.exports = function(){

	this.getNoticias = function(conexao, callback){
		conexao.query('select * from tblnoticias',callback );
	}

	this.getNoticia = function(conexao, callback){
		conexao.query('select * from tblnoticias where id = 2',callback );
	}

	this.salvarNoticia = function(noticia, conexao, callback){
		conexao.query('insert into tblnoticias set ?', noticia, callback);
	}


	return this;

}