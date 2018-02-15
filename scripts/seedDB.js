const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
require("dotenv").config();

// This file empties the Symptoms collection and inserts the Symptom below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/punctual");
const symptomSeed = [
  {
    symptoms: "Acne",
    advice:
      "Most of us experience a pre-menstrual breakout when we have increased levels of progesterone and testosterone.  Up your intake of Vitamin A to help prevent pores from becoming clogged",
    food: "Carrots, Kale, Spinach, Broccoli"
  },
  {
    symptoms: "Bloated",
    advice:
      "Have you ever heard that you should eat a banana after exercising to stop muscle cramps from settling in the next day? The same thing is true for menstrual cramps. Eat more postassium to reduce bloating!",
    food: "Spinach, bananas, yogurt, cantaloupe"
  },
  {
    symptoms: "Cramping",
    advice:
      "Zinc has been found to relieve menstrual cramps and swelling. Add zinc to your diet a few days before the start of menstruation. Please note that zinc requires vitamin B6 to be absorbed, so be sure that the food you eat contains enough vitamin B6.",
    food:
      "Dark chocolate, milk, cheese, spinach, peas, asparagus, mushrooms, beef"
  },
  {
    symptoms: "Thirsty",
    advice:
      "Estrogen, it seems, is actually associated with the body's ability to retain water. The lower it is, the less your body holds onto; and this fluctuation may result in an increased risk of dehydration. It's important to drink a lot of water and keep an eye on your hydration levels.",
    food: "Water, Coconut, Watermelon"
  },
  {
    symptoms: "Depressed",
    advice:
      "Leafy green vegetables are a superfood and one of the things you should always have in your diet. During your period they can help with cramps and be a great source of the calcium you need, as mentioned above.",
    food: "Spinach, Kale, walnuts, mushrooms, tomatoes"
  },
  
  {
    sympton: "Moody",
    advice:
      "Magnesium helps our bodies regulate serotonin activity, the brain’s feel-good neurotransmitter and natural appetite suppressor. PMS can lower magnesium in blood levels causing emotional stress and cravings.",
    food:
      "Black beans, pumpkin seeds, artichokes, peanuts, spinach, tofu, brown rice, cashews"
  },
  
  {
    symptoms: "Tired",
    advice:
      "Iron deficiency anemia (also possibly low vitamin B12 and folic acid) is a major contributor to premenstrual fatigue. We need a certain amount of iron to build enough healthy blood cells and to help oxygenate our blood cells.",
    food: "Dark chocolate, lentils, chicken, tofu, apricots, potatoes"
  }
];

db.Symptom.remove({})
  .then(() => db.Symptoms.collection.insertMany(symptomsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
