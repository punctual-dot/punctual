const router = require("express").Router();
const userRoutes = require("./users");

// user routes
router.use("/profile", userRoutes)

module.exports = router;
