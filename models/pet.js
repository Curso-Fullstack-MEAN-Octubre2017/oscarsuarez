const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {type: String, required: true},
    birthdate: {type: String, required: true},
    chipNumber: {type: String, required: true},
    specie: {type: String, required: true},
    race: {type: String, required: true},
    description: {type: String},
    photoUrl: {type: String, required: true},
    owner: {type: Schema.ObjectId, ref: "Customer", required: true}
});

module.exports = mongoose.model('Pet', petSchema);

