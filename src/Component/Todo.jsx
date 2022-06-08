import React from "react";
import { useState } from "react";

const Todo = (props) => {
  const { todo, index, complete, removeTodos } = props;
  const { editable, setEditable } = useState(false);
  //установка класса в зависимости от выбранного фильтра
  const clsName = `col todos-text ${todo.isDone ? "done" : ""}`;
  //для элемента в режиме текст
  const todoTextElem = (
    <div onDoubleClick={() => setEditable(!editable)} className={clsName}>
      {todo.todo}
    </div>
  );
  //для элемента в режиме редактирования
  const todoEditElem = (
    <input
      onDoubleClick={() => setEditable(!editable)}
      type="text"
      value={todo.todo}
      className={clsName}
    ></input>
  );
  //текущий элемент выбирается исходя из состояния
  const todoElem = editable ? todoEditElem : todoTextElem;

  return (
    <div className="row flex todos-item" key={index}>
      <div className="col todos-num">{index + 1}</div>

      {todoElem}

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
