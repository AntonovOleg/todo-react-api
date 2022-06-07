const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller.js");

router.get("/test", todoController.todo_test);
router.get("/id/:id", todoController.todo_details);
router.post("/create", todoController.todo_create);
router.put("/id/:id/update", todoController.todo_update);
router.delete("/id/:id/delete", todoController.todo_delete);
router.get("/getall", todoController.todoGetAll);

module.exports = router;