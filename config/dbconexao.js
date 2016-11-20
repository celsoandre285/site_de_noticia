var mysql = require('mysql');


var  connMysql = function(){
		console.log('conexao com sucesso');
		return  mysql.createConnection({
			// endereço do banco
			host :'localhost',
			// usuario
			user :'root',
			// senha
			password :'102030',
			// nome do banco
			database :'nodedb'
		});
}

module.exports = function(){
	return connMysql;
}