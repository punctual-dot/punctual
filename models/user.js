const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  lengthofperiod: {type: Number, required: true},
  lastdateoflastperiod: { type: Date, required: true},
  symptoms: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Symptom"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
