const path = require("path");
const router = require("express").Router();
const usersController = require("../controllers/usersController")
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);
// router.get("/api/users/:username", usersController.login)
router
  .route("/api/users/")
  .post(usersController.create);

// Matches with "api/users/:username, lets user login and update budget"
router
  .route("/api/users/:username")
  .get(usersController.login)
  .put(usersController.updateTodos);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
