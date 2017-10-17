'use strict';

//importamos el modelo customer

var Appointment = require('../models/appointment');

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

module.exports = {saveAppointment, getAppointment, getAppointmentById, updateAppointment};

