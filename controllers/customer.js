'use strict';

//importamos el modelo customer

var Customer = require('../models/customer');
var Q = require('q');

//funciones del controlador


function getCustomers() {
    var q = Q.defer();
    var query = Customer.find({});
    query.select('firstName lastName dni')
        .exec(function (err, customers) {
            if (err) return q.reject(err);
            q.resolve(customers);
        });
    return q.promise;
}

function getCustomerById(id) {
    var q = Q.defer();
    Customer.findById(id, (err, customers) => {
        if (err) return q.reject(err);
        q.resolve(customers)
    });
    return q.promise;
}

function saveCustomer(obj) {
    var q = Q.defer();
    var customer = new Customer(obj);
    customer.save((err, customerStored) => {
        if (err) return q.reject(err);
        q.resolve(customerStored);
    });
    return q.promise;
}

function updateCustomer(obj) {
    var q = Q.defer();
    Customer.findByIdAndUpdate(obj._id, obj, (err, customerStored) => {
        if (err) return q.reject(err);
        q.resolve(customerStored);
    });
    return q.promise;
}

module.exports = {saveCustomer, getCustomers, getCustomerById, updateCustomer};

