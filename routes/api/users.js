const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const todosController = require("../../controllers/todosController");

// Matches with "/api/users, lets user create login"
router
  .route("/")
  .post(usersController.create);

// Matches with "api/users/:id, lets user login and update budget"
router
  .route("/:id")
  .get(usersController.login)
  .put(usersController.update);

// Matches with "api/users/todos/:id, lets user create, update, and delete to-dos"
router
  .route("/todos/:id")
  .post(todosController.create)
  .put(todosController.update)
  .delete(todosController.remove);

module.exports = router;