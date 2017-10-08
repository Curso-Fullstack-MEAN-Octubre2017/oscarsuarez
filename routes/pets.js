const Pet = require('../models/pet');
const Customer = require('../models/customer');

module.exports = (router) => {

	/**
	 * FindAll
	 */
	router.get('/pets', function(req, res, next) {
		var search = {};
		if(req.query.searchTerm) {
			search.name = new RegExp(req.query.searchTerm, "i");
		}
		console.log("Search pets:", search);
		Pet.find(search, (err, pets) => {
			if (err) {
				console.log(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pets);
			}
		}).sort({'_id' : -1});
	});


	/**
	 * Get one
	 */
	router.route('/pets/:id').get(function(req, res) {
		Pet.findById(req.params.id, function(err, pet) {
			if (err) {
				console.log(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				// hidratar el customer
				// Customer.populate(pet, {path : "owner"}, (err, client) => {
					res.json(pet);
				//})

			}
		});
	});

	/**
	 * Insert
	 */
	router.post('/pets', (req, res, next) => {
		//TODO añadir validacion
		const pet = new Pet(req.body);
		console.log(pet);
		pet.save((err) => {
			if (err) {
				console.log(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pet);
			}
		})
	});
	
	/**
	 * Update
	 */
	router.put('/pets/:id', (req, res, next) => {
		Pet.findOne({_id : req.params.id }, function(err, pet) {
			if (err) {
				return res.send(err);
			}
			
			// rellenamos los datos que vienen en la peticion
			for(prop in req.body){
				pet[prop] = req.body[prop];
			}

			// save
			pet.save(function(err) {
				if (err) {
					console.log(err);
					res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
				} else {
					res.json(pet);
				}
			});
		});
	});	
	
	/**
	 * Delete
	 */
	router.route('/pets/:id').delete(function(req, res) {
		console.log("/pets/" + req.params.id);
		Pet.findByIdAndRemove(req.params.id, function(err, pet) {
			if (err) {
				console.log(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.sendStatus(200);//OK
			}
		});
	});
	
	return router;
}
