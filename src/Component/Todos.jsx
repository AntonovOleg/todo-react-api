import React from "react";
import Todo from "./Todo.jsx";

const Todos = (props) => {
  const { todos, complete, removeTodos } = props;

  return (
    <React.Fragment>
      <h3>Активные задачи</h3>
      <div className="todos">
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              index={index}
              complete={complete}
              removeTodos={removeTodos}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Todos;
