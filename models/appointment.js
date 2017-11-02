'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = Schema({
    dateTimeStart: {type: Date, required: true},
    dateTimeEnd: {type: Date, required: true},
    petId: {type: String, required: true,},
    vetId: {type: String, required: true,},
    Note: {type: String, required: false},
    Status: {type: Number, enum: [-1, 0, 1, 2], required: true}, //-1: CANCELADA ; 0: PENDIENTE; 1: EN CURSO; 2: TERMINADA
});



module.exports = mongoose.model("Appointment", AppointmentSchema);