const Todo = require("../models/todo.model");

exports.todo_test = function (req, res) {
  res.send("Test success");
};

exports.todo_create = function (req, res) {
  console.log("todo create");
  console.log("getted todo:",req.body.todo);


  let todo = new Todo({
    todo: req.body.todo,
    isDone: false
  });

  todo.save(function (err, data) {
    if (err) return next(err);
    console.log(data._id.toString());
    res.send(data);
  })
};

exports.todo_details = function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) return next(err);
    res.send(todo);
  });
};

exports.todo_update = function (req, res) {
  console.log("BACKEND MODIFYING TODO");
  Todo.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, todo) {
      if (err) return next(err);
      res.send("Todo updated succesfull");
    }
  );
};

exports.todo_delete = function (req, res) {
  Todo.findByIdAndDelete(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Todo successfully deleted");
  });
};

exports.todoGetAll = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) return next(err);
    res.send(todos);
  });
};
