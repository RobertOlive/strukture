const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users, lets user create login"
router
  .route("/")
  .post(usersController.create);

// Matches with "api/users/:username, lets user login and update budget"
router
  .route("/:username")
  .get(usersController.login)
  .put(usersController.updateTodos);

// Matches with "api/users/todos/:id, lets user create, update, and delete to-dos"
// router
//   .route("/todos/:id")
//   .post(todosController.create)
//   .put(todosController.update)
//   .delete(todosController.remove);

module.exports = router;