import React from "react";

const Todo = (props) => {
  const { todo, index, complete, removeTodos } = props;
  const clsName = `col todos-text ${todo.isDone ? "done" : ""}`;
  return (
    <div className="row flex todos-item" key={index}>
      <div className="col todos-num">{index + 1}</div>
      <div className={clsName}>{todo.todo}</div>
      <div className="todos-buttons col">
        <i
          className="item-btn material-icons blue-text"
          onClick={() => complete(todo._id)}
        >
          check
        </i>
        <i
          className="item-btn material-icons red-text"
          onClick={() => removeTodos(todo._id)}
        >
          delete
        </i>
      </div>
    </div>
  );
};

export default Todo;
