const router = require("express").Router();
const symptomsController = require("../../controllers/symptomsController");

// Matches with "/api/profile"
router.route("/")
  	.get(symptomsController.findAll)
  	.post(symptomsController.create);

router
  	.route("/:id")
  	.get(symptomsController.findById)

module.exports = router;
