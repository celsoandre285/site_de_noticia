
//importando biblioteca express
var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

//chamada função express
var aplicacao = express();

//informando gerador de views
aplicacao.set('view engine', 'ejs');
aplicacao.set('views', './app/views');

//
aplicacao.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('app/routes')
	.then('config/dbconexao.js')
	.then('app/models')
	.into(aplicacao);


module.exports = aplicacao;