'use strict';

var express = require('express');

var Controller = require('../controllers/pet');
var Pet = require('../models/pet');

var api = express.Router();

const successCallback = function (res) {
    return function (result) {
        res.json(result)
    }
};
const failCallback = function (res) {
    return function (err) {
        console.error(err);
        res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
    }
};

api.get('/customers/:id/pets', Controller.getPetByOwnerId);

api.get('/pet/:id', (req, res) => {
    Controller.getPetById(req.params.id).then(successCallback(res), failCallback(res));
});

api.post('/pet', (req, res) => {
    Controller.savePet(req.body).then(successCallback(res), failCallback(res));
});

api.put('/pet/:id', (req, res) => {
    Controller.updatePet(req.body).then(function (result) {
        if (result == null) {
            return res.status(412).send({message: "Error de concurencia"});
        }
        res.json(result);
    }, failCallback(res));
});

api.delete('/pet/:id', (req, res) => {
    Controller.deletePet(req.params.id).then(successCallback(res), failCallback(res));
});

module.exports = api;