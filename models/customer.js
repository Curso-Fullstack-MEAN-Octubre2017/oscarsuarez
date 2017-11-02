'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var dni_match = [/^[a-z]{3}[0-9]{6}[a-z]?$/i, 'El dni no es válido']
var email_match = [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'El email no es valido']

const CustomerSchema = Schema({
  dni: {type: String, required: true, unique: [true, 'Ese dni ya esta registrado'], match: dni_match},
  firstName: {type: String, required: 'Nombre obligatorio', maxlength: [50, 'Nombre muy largo']},
  lastName: {type: String, required: 'Apellido obligatorio', maxlength: [100, 'Apellido muy largo']},
  phone: {type: String, required: 'Telefono obligatorio'},
  email: {type: String, required: 'Email obligatorio', match: email_match},
  note: {type: String, required: false, maxlength: [500, 'Nota muy grande']},
})

module.exports = mongoose.model('Customer', CustomerSchema)