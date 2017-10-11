var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes');//Aqui se importa todos los archivos de la carpeta rutas

var app = express();

mongoose.connect('mongodb://localhost/petstore', {useMongoClient: true});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Base route
//Crea una ruta base para todas las rutas que corresponden a la api
app.use('/api', routes);

//Front End
app.all("*", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

module.exports = app;
