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
    birthDate: Date,
    description: String,
    customer: {type: Schema.ObjectId, ref: "Customer"},
});

module.exports = mongoose.model("Pet", PetSchema);