const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symptomSchema = new Schema({

  symptoms: { type: String },
  advice: { type: String },
  food: { type: String },
  dateofsymptom: { type: Date }
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
