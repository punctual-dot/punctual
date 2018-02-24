const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
require("dotenv").config();

// This file empties the Symptoms collection and inserts the Symptom below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/punctual");
const symptomSeed = [
  {
    symptom: "Breaking Out",
    advice:
      "Most of us experience a pre-menstrual breakout when we have increased levels of progesterone and testosterone.  Up your intake of Vitamin A to help prevent pores from becoming clogged. Break out from the acne and get your fill of Vitamin A with the foods below.",
    foods:  [
        "Carrots",
        "Kale",
        "Spinach",
        "Broccoli",
        "Caviar",
        "Liver",
        "Salmon",
        "Trout",
        "Cream cheese",
        "Goat cheese"
    ]
  },
  {
    symptom: "Bloated",
    advice:
      "Have you ever heard that you should eat a banana after exercising to stop muscle cramps from settling in the next day? The same thing is true for bloating. Eat more postassium to help deflate a little!",
    foods: [
        "Sweet potato",
        "Spinach",
        "Bananas",
        "Yogurt",
        "Cantaloupe",
        "Beets",
        "Edamame",
        "Swiss chard",
        "Parsnips",
        "Oranges"
    ]
  },
  {
    symptom: "Cramping",
    advice:
      "Zinc has been found to relieve menstrual cramps and swelling, so why not add zinc to your diet a few days before the start of menstruation? Please note that zinc requires vitamin B6 to be absorbed, so be sure that the food you eat contains enough vitamin B6. Eat the foods below to help relieve the cramping.",
    foods:
      [
        "Dark chocaolate",
        "Peas",
        "Asparagus",
        "Mushrooms",
        "Beef",
        "Lamb",
        "Oysters",
        "Wheat germ",
        "Cashews",
        "Chickpeas"
    ]
  },
  {
    symptom: "Thirsty",
    advice:
      "Estrogen, it seems, is actually associated with the body's ability to retain water. The lower it is, the less your body holds onto; and this fluctuation may result in an increased risk of dehydration. It's important to drink a lot of water and keep an eye on your hydration levels. Quench your thirst by eating one or a few of the recommended foods below.",
    foods: [
        "Starfruit",
        "Coconut",
        "Watermelon",
        "Celery",
        "Cucumber",
        "Radishes",
        "Tomatoes",
        "Cauliflower",
        "Strawberries",
        "Grapefruit"
    ]
  },
  {
    symptom: "Depressed",
    advice:
      "Estrogen is believed to have a negative impact on the production of serotonin, a neurotransmitter which the body produces to make us feel good. You can try eating foods that contain tryptophan, a nutrient that boosts your seratonin levels. Also - talk to someone you love, or get help if you need it <3",
    foods: [
        "Kale",
        "Walnuts",
        "Mushrooms",
        "Tomatoes",
        "Almonds",
        "Oranges",
        "Napa",
        "Figs",
        "Tofu",
        "Chia seeds"
    ]
  },

  {
    symptom: "Moody",
    advice:
      "Magnesium helps our bodies regulate serotonin, a neurotransmitter our body produces that not only makes us feel good, but suppresses cravings, too. PMS can lower magnesium in blood levels causing emotional stress and insatiable cravings. You won't be so moody once you feed your body with any of the foods below!",
    foods: [
        "Brown rice",
        "Black beans",
        "Artichokes",
        "Spinach",
        "Avocado",
        "Cashews",
        "Peanut",
        "Sesame",
        "White beans",
        "Cocoa"
    ]
  },

  {
    symptom: "Tired",
    advice:
      "Iron deficiency anemia (also possibly low vitamin B12 and folic acid) is a major contributor to premenstrual fatigue. We need a certain amount of iron to build enough healthy blood cells and to help oxygenate our blood cells. Get your energy back with some iron rich foods as shown below.",
    foods: [
        "Quinoa",
        "Dark chocolate",
        "Lentils",
        "Chicken",
        "Turkey",
        "Fish",
        "Tofu",
        "Eggs",
        "Potatoes",
        "Collard greens"
    ]
  }
];

db.Symptom
  .remove({})
  .then(() => db.Symptom.collection.insertMany(symptomSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

