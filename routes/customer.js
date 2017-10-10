'use strict'

//cargando el modulo express
var express = require('express');

//Aqui se importa el controlador de customer
var CustomerController = require('../controllers/customer')

//asignando el router de express a variable api
var api = express.Router();


// Aqui se crea las rutas por cada metodos definidos en el controlador

api.get('/customers', CustomerController.getCustomers);
api.post('/customers', CustomerController.saveCustomer);
api.get('/customers/:id',CustomerController.searchCustomers)

// exportando el modulo
module.exports = api;