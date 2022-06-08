const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller.js");

router.get("/test", todoController.todo_test);
router.get("/id/:id", todoController.todo_details);
router.post("/create", todoController.todo_create);
router.put("/id/:id/modify", todoController.todo_update);
router.delete("/id/:id/delete", todoController.todo_delete);
router.get("/getall", todoController.todoGetAll);

// router.post("/create", async(req,res)=>{
//   try{
//     const {text} = req.body;
//     const todo = await new todo({
//       text:todo,
//       isDone:false
//     })

//     await todo.save();

//     res.json(todo);

//   } catch(error) {console.error(error)}
// })

module.exports = router;