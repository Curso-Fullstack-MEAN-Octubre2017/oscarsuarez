'use strict';

//importamos el modelo customer

var Pet = require('../models/pet');

function getPetByOwnerId(req, res) {

    var id = req.params.id;
    Pet.find({owner: id}, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existen mascotas`});
        res.send(200, pets);
    });
}

function getPetById(req, res) {

    var id = req.params.id;

    Pet.findById(id, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existe la mascota`});
        res.send(200, pets);
    });
}

function deletePet(req, res) {
    var id = req.params.id;

    Pet.remove({_id: id}, function (err) {
        if (err) return res.status(500).send({message: `Error al borrar: ${err}`});
        res.send(200, ({message: 'borrado correctamente'}));
    });
}

function savePet(req, res) {

    var pet = new Pet(req.body);

    //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
    pet.save((err, petStored) => {
        //si existe un error
        if (err) return res.status(500).send({message: "Error al guardar el cliente"});
        //si la mascota guardado no existe
        if (!petStored) return res.status(404).send({message: "No se ha registrado el cliente"});
        //si OK devuelve un objeto pet con los datos guardados en la bdat
        res.status(200).send({customer: petStored});
    });

}

function updatePet(req, res) {

    Pet.findByIdAndUpdate(req.params.id, req.body, (err, petStored) => {
        //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
        if (err) return res.status(500).send({message: "Error al guardar la mascota"});
        //si el pet guardado no existe
        if (!petStored) return res.status(404).send({message: "No se ha registrado la mascota"});
        //si OK devuelve un objeto customer con los datos guardados en la bdat
        res.status(200).send({customer: petStored});
    });
}

//export las funciones

module.exports = {
    savePet,
    getPetById,
    updatePet,
    getPetByOwnerId,
    deletePet
};