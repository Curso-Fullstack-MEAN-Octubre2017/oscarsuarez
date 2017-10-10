'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.Promise = global.Promise; // porque?

const PetSchema = Schema({
    chipNumber: String,
    name: String,
    species: String,
    sex: String,
    owner: {type: Schema.ObjectId, ref: 'Customer'},
    race: String,
    birthDate: Date,
    description: String
});

module.exports = mongoose.model("Pet", PetSchema);