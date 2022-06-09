import React from "react";
import Todo from "./Todo.jsx";
import "./Styles/Todos.css";

const Todos = (props) => {
  const { todos, complete, removeTodos, modify, selectAll, deleteAll } = props;

  return (
    <React.Fragment>
      <h4>Список задач</h4>
      <div className="todos-wrapper">
        <div className="todos">
          {todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                index={index}
                complete={complete}
                removeTodos={removeTodos}
                key={index}
                modify={modify}
              />
            );
          })}
        </div>
      </div>
      <button className="waves-effect waves-light btn blue" onClick={selectAll}>
        Завершить все
      </button>
      <button className="waves-effect waves-light btn blue" onClick={deleteAll}>
        Удалить все
      </button>
    </React.Fragment>
  );
};

export default Todos;
