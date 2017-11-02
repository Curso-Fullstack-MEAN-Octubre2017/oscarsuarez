'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = Schema({
    dni: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    note: {type: String, required: true},
});

module.exports = mongoose.model("Customer", CustomerSchema);