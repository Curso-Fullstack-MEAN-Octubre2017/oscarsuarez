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
    if (validationErrors) {
        return res.status(400).send({message: validationErrors[Object.keys(validationErrors)[0]]});
    }

    //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
    pet.save((err, petStored) => {
        //si existe un error
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        //si la mascota guardado no existe
        if (!petStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        //si OK devuelve un objeto pet con los datos guardados en la bdat
        res.json(petStored);
    });

}

function updatePet(req, res) {

    Pet.findByIdAndUpdate(req.params.id, req.body, (err, petStored) => {
        //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
        if (err) return res.status(500).send({message: "Error al guardar la mascota"});
        //si el pet guardado no existe
        if (!petStored) return res.status(404).send({message: "No se ha registrado la mascota"});
        //si OK devuelve un objeto customer con los datos guardados en la bdat
        res.json(petStored);
    });
}

//export las funciones
module.exports = {
    getPetById,
    savePet,
    updatePet,
    getPetByOwnerId,
    deletePet
};