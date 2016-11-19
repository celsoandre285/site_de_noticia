
//importando biblioteca express
var express = require('express');
//chamada função express
var aplicacao = express();

//informando gerador de views
aplicacao.set('view engine', 'ejs');


//respondendo as requisições

aplicacao.get('/tecnologia', function (request, response) {
	response.render("secao/tecnologia"); 
});

aplicacao.get('/', function (request, response) {
	response.render("home/index"); 
});

aplicacao.get('/noticia', function (request, response) {
	response.render("noticias/noticia"); 
});

aplicacao.get('/noticias', function (request, response) {
	response.render("noticias/noticias"); 
});

aplicacao.get('/formulario_add_noticia', function (request, response) {
	response.render("admin/formulario_add_noticia"); 
});





aplicacao.listen(3000, function () {
	console.log("Servidor ON!");
});