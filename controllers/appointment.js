'use strict';

var Appointment = require('../models/appointment');
var moment = require('moment');

function getAppointment(req, res) {

    Appointment.find({}).exec(function (err, appointments) {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        res.send(200, appointments);
    });
}

function getAppointmentById(req, res) {

    var id = req.params.id;
    Appointment.findById(id, (err, appointment) => {
        console.log(appointment);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!appointment) return res.status(404).send({message: `No existen citass`});
        res.send(200, appointment);
    });
}

function saveAppointment(req, res) {
    var appointment = new Appointment(req.body);
    console.log("POST: " + appointment);
    appointment.save((err, appointmentStored) => {
        if (err) return res.status(500).send({message: "Error al guardar la cita"});
        if (!appointmentStored) return res.status(404).send({message: "No se ha registrado la cita"});
        res.status(200).send({appointment: appointmentStored});
    });
}

function updateAppointment(req, res) {

    Appointment.findByIdAndUpdate(req.params.id, req.body, (err, appointment) => {
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        if (!appointmentStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        res.status(200).send({customer: appointmentStored});
    });
}

function getAppointmentsByDate(req, res) {

    var from = req.params.from; //20171001
    var to = req.params.to; //20171101

    from = moment(from, "YYYYMM");
    to = moment(to, 'YYYYMM');

    var searchParams = {};
    searchParams['dateTime'] = {$gte: from, $lte: to};
    Appointment.find(searchParams).exec(function (err, appointments) {
        if (err) return console.log('err', err);
        res.status(200).send(appointments);
    })

}

module.exports = {saveAppointment, getAppointment, getAppointmentById, updateAppointment, getAppointmentsByDate};

