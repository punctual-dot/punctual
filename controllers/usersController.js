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
	  },

	addSymptom: function (req, res) {
		db.User
			.findOneAndUpdate(req.params.id, {
				$push: {
					symptoms: [
						{symptom: req.body.symptoms[0].symptom, dateofsymptom: req.body.symptoms[0].dateofsymptom, symptomid: req.body.symptoms[0].symptomid }
					]
				}
			},	{
					sort: {_id: -1},
					upsert: true
			  	}, (err, result) => {
						if (err) return res.send(err)
						res.send(result)
			  	})
	}
}