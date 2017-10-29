'use strict';

//cargando el modulo express
var express = require('express');

//Aqui se importa el controlador de customer
var CustomerController = require('../controllers/customer');

//asignando el router de express a variable api
var api = express.Router();

//defino los callbacks de success y error
const successCallback = function (res) {
    return function (result) {
        res.json(result)
    }
};
const failCallback = function (res) {
    return function (err) {
        console.error(err);
        res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
    }
};

// Aqui se crea las rutas por cada metodos definidos en el controlador

//customers
api.get('/customers', (req, res) => CustomerController.getCustomers().then(successCallback(res), failCallback(res)));

api.get('/customers/:id', (req, res) => {
    CustomerController.getCustomerById(req.params.id).then(successCallback(res), failCallback(res));
});

api.post('/customers', (req, res) => {
    CustomerController.saveCustomer(req.body).then(successCallback(res), failCallback(res));
});

api.put('/customers/:id', (req, res) => {
    CustomerController.updateCustomer(req.body).then(successCallback(res), failCallback(res))
});

//exportando el modulo
module.exports = api;