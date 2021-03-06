// IMOPRT DE DEPENDENCIAS //
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var moment = require('moment')
var jquery = require('jquery')
var q = require('q')

//Aqui se importa todos los archivos de la carpeta rutas
var customerRoute = require('./routes/customer')
var petRoute = require('./routes/pet')
var appointmentRoute = require('./routes/appointment')
var app = express()

app.io = require('socket.io')()
require('./routes/socketio-manager.js')(app.io)

//Conexion a mongo a traves de promesas para evitar el warning:
//DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated
mongoose.Promise = global.Promise

//SI NO EXISTE VARIABLE DE ENTORNO PORT ES QUE SE EJECUTA DESDE LOCALHOST//
if (process.env.PORT) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/petstore', {useMongoClient: true})
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))

//Base route
//Crea una ruta base para todas las rutas que corresponden a la api
app.use('/api', customerRoute)
app.use('/api', petRoute)
app.use('/api', appointmentRoute)

//Front End
app.all('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

// Descomentar linea para insertar datos de citas para pruebas, mantener comentado si los datos ya fueron insertados una vez //
//require('./insertdata/appointment');

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // log the error
  console.log(err)
  res.sendStatus(err.status || 500)
})

module.exports = app