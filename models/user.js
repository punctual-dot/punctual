const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: { type: String, required: true },
    lengthofperiod: {type: Number, required: true},
    lastdateoflastperiod: { type: Date, required: true},
    lengthofcycle: {type: Number, required: true},
    firstdayofcycle: {type: Date, required: true},

    symptoms: [
        {
            dateofsymptom: {type: Date}, 
            symptom: {type: String}, 
            symptomid: {type: String}
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
