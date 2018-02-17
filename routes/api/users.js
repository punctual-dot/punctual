const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/profile"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .post(usersController.addSymptom)

module.exports = router;
