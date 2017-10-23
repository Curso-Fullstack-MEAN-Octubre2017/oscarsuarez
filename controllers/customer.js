'use strict';

//importamos el modelo customer

var Customer = require('../models/customer');

//funciones del controlador


function getCustomers(req, res) {
    var query = Customer.find({});
    query.select('firstName lastName')
        .exec(function (err, customers) {
            if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
            res.json(customers)
        });
}

function getCustomerById(req, res) {

    var id = req.params.id;

    Customer.findById(id, (err, customers) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!customers) return res.status(404).send({message: `No existen clientes`});
        res.json(customers)
    });
}

function saveCustomer(req, res) {

    //se guarda los parametros que nos vienen por POST en el body
    //se recoje el cuerpo de la peticion y se asigna a un nuevo objeto customer

    var customer = new Customer(req.body);

    //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
    customer.save((err, customerStored) => {
        //si existe un error
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        //si el usuario guardado no existe
        if (!customerStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        //si OK devuelve un objeto customer con los datos guardados en la bdat
        res.json(customerStored)

    });

}

function updateCustomer(req, res) {

    Customer.findByIdAndUpdate(req.params.id, req.body, (err, customerStored) => {
        //si existe un error
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        //si el usuario guardado no existe
        if (!customerStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        //si OK devuelve un objeto customer con los datos guardados en la bdat
        res.json(customerStored);
    });
}

//export las funciones

module.exports = {saveCustomer, getCustomers, getCustomerById, updateCustomer};

