'use strict'

//cargando el modulo express
var express = require('express');

//Aqui se importa el controlador de customer
var CustomerController = require('../controllers/customer');
var PetController = require('../controllers/pet');

//asignando el router de express a variable api
var api = express.Router();


// Aqui se crea las rutas por cada metodos definidos en el controlador

//customers
api.get('/customers', CustomerController.getCustomers);
api.get('/customers/:id', CustomerController.getCustomerById);
api.post('/customers', CustomerController.saveCustomer);
api.put('/customers/:id', CustomerController.updateCustomer);

//pets
api.get('/pets', PetController.getPets);
api.get('/customers/:id/pets', PetController.getPetById);
api.post('/pets', PetController.savePet);

// exportando el modulo
module.exports = api;