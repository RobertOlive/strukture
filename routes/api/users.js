const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users, lets user create login"
// router
//   .route("/")
//   .post(usersController.create);

// // Matches with "api/users/:username, lets user login and update budget"
// router
//   .route("/:username")
//   .get(usersController.login)
//   .put(usersController.updateTodos);


module.exports = router;