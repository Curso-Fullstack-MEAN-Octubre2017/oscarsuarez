'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = Schema({
    dateTime: Date,
    petId: String,
    vetId: String,
    Status: {type: Number, enum: [-1, 0, 1, 2]} //-1: CANCELADA ; 0: PENDIENTE; 1: EN CURSO; 2: TERMINADA
});

module.exports = mongoose.model("Appointment", AppointmentSchema);