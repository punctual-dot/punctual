const router = require("express").Router();
const userRoutes = require("./users");
const symptomRoutes = require("./symptoms");

// user routes
router.use("/profile", userRoutes)
router.use("/symptoms", symptomRoutes)
module.exports = router;
