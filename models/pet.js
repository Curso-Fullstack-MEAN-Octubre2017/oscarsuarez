'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.Promise = global.Promise; // porque?

const PetSchema = Schema({
    chipNumber: {type: String, required: true},
    name: {type: String, required: true},
    species: {type: String, required: true},
    sex: {type: String, required: true},
    picUrl: {type: String, required: true},
    owner: {type: String, required: true},
    race: {type: String, required: true},
    birthDate: {type: Date, required: true},
    description: {type: String, required: true},
//    customer: {type: Schema.ObjectId, ref: "Customer"},
});

module.exports = mongoose.model("Pet", PetSchema);