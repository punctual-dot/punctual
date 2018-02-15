const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema({
  symptoms: { type: String, required: true },
  advice: { type: String, required: true },
  food: { type: String, required: true }
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
