'use strict';

//importamos el modelo customer

var Pet = require('../models/pet');

function getPetByOwnerId(req, res) {

    var id = req.params.id;

    console.log(id);

    Pet.find({owner: id}, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existen mascotas`});
        res.send(200, pets);


    })
}

function getPetById(req, res) {

    var id = req.params.id;

    console.log(id);

    Pet.findById(id, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existe la mascota`});
        res.send(200, pets);
    });
}

function savePet(req, res) {

    var pet = new Pet();
    var params = req.body;

    console.log(params);

    pet.chipNumber = params.chipNumber;
    pet.name = params.name;
    pet.species = params.species;
    pet.sex = params.sex;
    pet.picUrl = params.picUrl;
    pet.owner = params.owner;
    pet.race = params.race;
    pet.birthDate = params.birthDate;
    pet.description = params.description;


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

    Pet.findById(req.params.id, (err, pet) => {

        pet.description = req.body.description;
        pet.birthDate = req.body.birthDate;
        pet.race = req.body.race;
        pet.picUrl = req.body.picUrl;
        pet.sex = req.body.sex;
        pet.species = req.body.species;
        pet.name = req.body.name;
        pet.chipNumber = req.body.chipNumber;

        //funcion callback si no hay error devuelve el usuario guardado sino devuelve el error
        pet.save((err, petStored) => {
            //si existe un error
            if (err) return res.status(500).send({message: "Error al guardar la mascota"});
            //si el pet guardado no existe
            if (!petStored) return res.status(404).send({message: "No se ha registrado la mascota"});

            //si OK devuelve un objeto customer con los datos guardados en la bdat
            res.status(200).send({customer: petStored});

        });

    })

}

//export las funciones

module.exports = {
    savePet,
    getPetById,
    updatePet,
    getPetByOwnerId
};