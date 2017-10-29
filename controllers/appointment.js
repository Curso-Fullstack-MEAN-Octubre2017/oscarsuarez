'use strict';

var Appointment = require('../models/appointment');
var Pet = require('../models/pet');
var Customer = require('../models/customer');
var Q = require('q');
var moment = require('moment');

function getAppointments() {
    var q = Q.defer();
    Appointment.find({}).exec(function (err, appointments) {
        if (err) return q.reject(err);
        q.resolve(appointments);
    });
    return q.promise;
}

function getAppointmentById(id) {
    var q = Q.defer();
    Appointment.findById(id, (err, appointment) => {
        if (err) q.reject(err);
        q.resolve(appointment);
    }).populate(
        {
            path: 'petId',
            model: 'Pet',
            populate: {
                path: 'owner',
                model: 'Customer',
            }
        });
    return q.promise;
}

function saveAppointment(obj) {
    var q = Q.defer();
    var appointment = new Appointment(obj);
    appointment.save((err, appointmentStored) => {
        if (err) return q.reject(err);
        q.resolve(appointmentStored);
    });
    return q.promise;
}

function updateAppointment(obj) {
    var q = Q.defer();
    Appointment.findByIdAndUpdate(obj._id, obj, (err, appointmentStored) => {
        if (err) return q.reject(err);
        q.resolve(appointmentStored);
    });
    return q.promise;
}

function getAppointmentsByDate(searchParams) {
    var q = Q.defer();
    Appointment.find(searchParams, (err, appointmentsResult) => {
            if (err) return q.reject(err);
            var group_to_dates = appointmentsResult.reduce(function (obj, item) {
                var date = moment(item.dateTimeStart).format('YYYY-MM-DD');
                var starthour = moment(item.dateTimeStart).utc().format('HH:mm');
                if (obj[date] == null) obj[date] = {};
                if (obj[date][starthour] == null) obj[date][starthour] = item;
                return obj;
            }, {});
            q.resolve(group_to_dates);
        }
    ).populate(
        {
            path: 'petId',
            model: 'Pet',
            select: 'name species picUrl',
            populate: {
                path: 'owner',
                model: 'Customer',
                select: 'firstName lastName'
            }
        }
    ).sort({'dateTimeStart': 1});
    return q.promise;
}

function deleteAppointment(id) {
    var q = Q.defer();
    Appointment.remove({_id: id}, (err) => {
        if (err) return q.reject(err);
        q.resolve({message: 'borrado correctamente'});
    });
    return q.promise;
}


module.exports = {
    saveAppointment,
    getAppointments,
    getAppointmentById,
    deleteAppointment,
    updateAppointment,
    getAppointmentsByDate
};