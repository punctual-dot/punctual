const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomsSchema = new Schema({
  symptoms: { type: String, required: true },
  advice: { type: String, required: true },
  food: { type: String, required: true }
});

const Symptoms = mongoose.model("Symptoms", symptomsSchema);

module.exports = Symptoms;
