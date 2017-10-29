'use strict'

var express = require('express');
var moment = require('moment');

var AppointmentController = require('../controllers/appointment');
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

api.get('/appointments', (req, res) => {
    AppointmentController.getAppointments().then(successCallback(res), failCallback(res));
});


api.get('/appointments/:id', (req, res) => {
    AppointmentController.getAppointmentById(req.params.id).then(successCallback(res), failCallback(res))
});
api.get('/appointments/:from/:to', (req, res) => {
    var from = moment(req.params.from, "YYYYMM");
    var to = moment(req.params.to, "YYYYMM");
    var searchParams = {'dateTimeStart': {$gte: from, $lt: to}, 'Status': {$gt: -1}};
    AppointmentController.getAppointmentsByDate(searchParams).then(successCallback(res), failCallback(res));
});
api.post('/appointments', (req, res) => {
    AppointmentController.saveAppointment(req.body).then(successCallback(res), failCallback(res));
});
api.put('/appointments/:id', (req, res) => {
    AppointmentController.updateAppointment(req.body).then(successCallback(res), failCallback(res))
});
api.delete('/appointments/:id', (req, res) => {
    AppointmentController.deleteAppointment(req.params.id).then(successCallback(res), failCallback(res))
});

module.exports = api;