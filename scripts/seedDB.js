const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
require('dotenv').config();

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/punctual"
);
const userSeed = [
  {
    name: "Susan Kenneth",
    email: "susanlovesskiiing@somethingmail.com",
    lengthofperiod: 5,
    lastdateoflastperiod: new Date("<2018-01-02>") 
  },
  {
    name: "Jenny Harrison",
    email: "jenny@harrison.com",
    lengthofperiod: 4,
    lastdateoflastperiod: new Date("<2017-12-25>") 
  },

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
