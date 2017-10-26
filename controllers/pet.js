'use strict';

//importamos el modelo customer

var Pet = require('../models/pet');
var Validators = require('../public/app/validation/validators');
var Q = require('q');

function getPetByOwnerId(req, res) {

    var id = req.params.id;
    Pet.find({owner: id}, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existen mascotas`});
        res.json(pets);
    });
}

function getPetById(id) {
    var q = Q.defer();
    Pet.findById(id, (err, pets) => {
        if (err) return q.reject(err);
        q.resolve(pets);
    });
    return q.promise;
};

function deletePet(req, res) {
    var id = req.params.id;
    Pet.remove({_id: id}, function (err) {
        if (err) return res.status(500).send({message: `Error al borrar: ${err}`});
        res.json({message: 'borrado correctamente'});
    });
}

function savePet(req, res) {
    var pet = new Pet(req.body);
    const validationErrors = Validators.validatePet(pet);
    if (validationErrors) return res.status(400).send({message: validationErrors[Object.keys(validationErrors)[0]]});

    pet.save((err, petStored) => {
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        if (!petStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        res.json(petStored);
    });
}

function updatePet(json) {
    var q = Q.defer();

    var v = json.__v;
    delete json.__v; // evitamos el conflicto entre $set e $inc

    Pet.findOneAndUpdate(
        {_id: json._id, __v: v}, // find current version
        {$set: json, $inc: {__v: 1}}, // update and increment version
        {new: true}, // return inserted version
        function (err, pet) {
            if (err) {
                console.error(err);
                q.reject(err);
            } else {
                q.resolve(pet);
            }
        });

    return q.promise;
}

//export las funciones
module.exports = {
    getPetById,
    savePet,
    updatePet,
    getPetByOwnerId,
    deletePet
};