'use strict';

//importamos el modelo customer

var Pet = require('../models/pet');

function getPets(req, res) {
    var query = Pet.find({});
    query.select('name species picUrl')
        .exec(function (err, customers) {
            if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});

            res.send(200, customers);
        });
}

function getPetById(req, res) {

    var id = req.params.id;

    console.log(id);

    Pet.find({owner: id}, (err, pets) => {
        console.log(pets);
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!pets) return res.status(404).send({message: `No existen mascotas`});
        res.send(200, pets);


    })
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

//export las funciones

module.exports = {
    savePet,
    getPets,
    getPetById
};