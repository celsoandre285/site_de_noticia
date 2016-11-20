var aplicacao = require('./config/server');



/*
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(aplicacao);

var rotaformulario = require('./app/routes/formulario_inclusao_noticias');
rotaformulario(aplicacao);

var rotaHome = require('./app/routes/home');
rotaHome(aplicacao);
*/


//subindo o servidor e colocando para ouvir na porta 3000
aplicacao.listen(3000, function () {
	console.log("Servidor ON!");
});