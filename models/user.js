const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
  	type: String, required: true },
  	lengthofperiod: {type: Number, required: true},
  	lastdateoflastperiod: { type: Date, required: true},
    lengthofcycle: {type: Number, required: true}

  // symptoms: [
  // {
  // 	type: Schema.Types.ObjectId,
  // 	ref: "Symptom"
  // 	}
  // ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
