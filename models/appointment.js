'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = Schema({
    dateTimeStart: Date,
    dateTimeEnd: Date,
    petId: String,
    vetId: String,
    Status: {type: Number, enum: [-1, 0, 1, 2]}, //-1: CANCELADA ; 0: PENDIENTE; 1: EN CURSO; 2: TERMINADA
    pet: {type: Schema.ObjectId, ref: "Pet"},
});

module.exports = mongoose.model("Appointment", AppointmentSchema);