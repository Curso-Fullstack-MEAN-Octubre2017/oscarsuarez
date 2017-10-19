'use strict';

var Appointment = require('../models/appointment');
var Pet = require('../models/pet');
var Customer = require('../models/customer');

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

    var from = moment(req.params.from,"YYYYMM");
    var to = moment(req.params.to,"YYYYMM");
    var searchParams = {'dateTimeStart': {$gte: from, $lte: to}, 'Status': {$gt: -1}};

    Appointment.find(searchParams, (err, appointmentsResult) => {
            if (err) return console.log('err', err);

            var group_to_dates = appointmentsResult.reduce(function (obj, item) {

                var date = moment(item.dateTimeStart).format('YYYY-MM-DD');
                var starthour = moment(item.dateTimeStart).utc().format('HH:mm');

                if (obj[date] == null) obj[date] = {};
                if (obj[date][starthour] == null) obj[date][starthour] = item;

                return obj;
            }, {});
            res.status(200).send(group_to_dates);
        }
    ).populate(
        {
            path: 'petId',
            model: 'Pet',
            select: 'name species',
            populate: {
                path: 'owner',
                model: 'Customer',
                select: 'firstName lastName'
            }
        }
    ).sort({'dateTimeStart': 1})
}

module.exports = {
    saveAppointment,
    getAppointment,
    getAppointmentById,
    updateAppointment,
    getAppointmentsByDate
};