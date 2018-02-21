const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema({

  	symptom: { type: String },
  	advice: { type: String },
  	foods: [
    	{type: String}
  	]
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
