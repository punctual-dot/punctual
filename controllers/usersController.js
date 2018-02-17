const db = require("../models");

// Defining methods for the userController
module.exports = {
  	create: function(req, res) {
   	 	db.User
	      .create(req.body)
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	},

	findAll: function(req, res) {
    	db.User
    		.find(req.query)
	      .sort({ date: -1 })
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.User
		  .findById(req.params.id)
		  .then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
			console.log("PARAMS" + req)
	  },

	addSymptom: function (req, res) {
		// Create a new Note in the db
		db.User
			.findOneAndUpdate(req.params.id , { $push: { symptoms: dbSymptom._id } }).then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
}
}