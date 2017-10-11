'use strict';

//importamos el modelo customer

var Customer = require('../models/customer');

//funciones del controlador
function getCustomers(req, res) {

    var query = Customer.find({});
    query.select('firstName lastName')
        .exec(function (err, customers) {
            if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});

            res.send(200, customers);
        });
}

function getCustomerById(req, res) {

    var id = req.params.id;

    console.log(id);

    Customer.findById(id, (err, customers) => {
        console.log(customers);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!customers) return res.status(404).send({message: `No existen clientes`});
        res.send(200, customers);
    })
}

function saveCustomer(req, res) {

    var customer = new Customer();

    //se guarda los parametros que nos vienen por POST en el body
    //se recoje el cuerpo de la peticion

    var params = req.body;

    console.log(params);

    customer.dni = params.dni;
    customer.firstName = params.firstName;
    customer.lastName = params.lastName;
    customer.phone = params.phone;
    customer.email = params.email;
    customer.note = params.note;

    //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
    customer.save((err, customerStored) => {
        //si existe un error
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        //si el usuario guardado no existe
        if (!customerStored) return res.status(404).send({message: "No se ha registrado el cliente"});

        //si OK devuelve un objeto customer con los datos guardados en la bdat
        res.status(200).send({customer: customerStored});

    });

}

function updateCustomer(req, res) {



}

//export las funciones

module.exports = {
    saveCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer
};