const router = require("express").Router();
const symptomController = require("../../controllers/symptomsController");

// Matches with "/api/users"
router.route("/")
  .get(symptomController.findAll)
  .post(symptomController.create);

router
  .route("/:id")
  .get(symptomController.findById)

module.exports = router;
