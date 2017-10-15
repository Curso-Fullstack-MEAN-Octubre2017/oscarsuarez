'use strict'

var express = require('express');

var PetController = require('../controllers/pet');

var api = express.Router();

api.get('/customers/:id/pets', PetController.getPetByOwnerId);
api.get('/pet/:id', PetController.getPetById);
api.post('/pet', PetController.savePet);
api.put('/pet/:id', PetController.updatePet);
api.delete('/pet/:id',PetController.deletePet);

module.exports = api;