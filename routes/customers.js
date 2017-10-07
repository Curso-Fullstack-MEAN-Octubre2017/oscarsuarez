const Customer = require('../models/customer');

module.exports = (router) => {

	/**
	 * FindAll
	 */
	router.get('/customers', function(req, res, next) {
		Customer.find({}, (err, customers) => {
			if (err) {
				res.json(err);
			} else {
				res.json(customers);
			}
		}).sort({'_id' : -1});
	});


	/**
	 * Get one
	 */
	router.route('/customers/:id').get(function(req, res) {
		Customer.findById(req.params.id, function(err, customer) {
			if (err) {
				// TODO send http error
				return res.send(err);
			} else {
				res.json(customer);
			}
		});
	});

	/**
	 * Insert
	 */
	router.post('/customers', (req, res, next) => {
		//TODO añadir validacion
		const customer = new Customer({
			dni : req.body.dni,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			phone : req.body.phone,
			email : req.body.email,
			note : req.body.note
		});
		customer.save((err) => {
			if (err) {
				// TODO send http error
			} else {
				res.json(customer);
			}
		})
	});
	
	/**
	 * Update
	 */
	router.put('/customers/:id', (req, res, next) => {
		Customer.findOne({_id : req.params.id }, function(err, customer) {
			if (err) {
				return res.send(err);
			}

			customer.dni = req.body.dni;
			customer.firstName = req.body.firstName;
			customer.lastName = req.body.lastName;
			customer.phone = req.body.phone;
			customer.email = req.body.email;
			customer.note = req.body.note;

			// save
			customer.save(function(err) {
				if (err) {
					// TODO send http error
				} else {
					res.json(customer);
				}
			});
		});
	});	
	
	/**
	 * Get one
	 */
	router.route('/customers/:id').delete(function(req, res) {
		console.log("/customers/" + req.params.id);
		Customer.findByIdAndRemove(req.params.id, function(err, customer) {
			if (err) {
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.sendStatus(200);//OK
			}
		});
	});
	
	return router;
}
