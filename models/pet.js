'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.Promise = global.Promise; // porque?

const PetSchema = Schema({
    chipNumber: String,
    name: String,
    species: String,
    sex: String,
    picUrl: String,
    owner: String,
    race: String,
    birthDate: String,
    description: String
});

module.exports = mongoose.model("Pet", PetSchema);