'use strict'

var express = require('express');


var AppointmentController = require('../controllers/appointment');
var api = express.Router();

api.get('/appointments', AppointmentController.getAppointment);
api.get('/appointments/:id', AppointmentController.getAppointmentById);
api.get('/appointments/:from/:to', AppointmentController.getAppointmentsByDate);
api.post('/appointments', AppointmentController.saveAppointment);
api.put('/appointments/:id', AppointmentController.updateAppointment);

module.exports = api;