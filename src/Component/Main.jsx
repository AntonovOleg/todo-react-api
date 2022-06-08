import React from "react";
import { useState, useCallback } from "react";
import "./Styles/Main.css";

import Form from "./Form.jsx";
import Todos from "./Todos.jsx";
import ItemCounter from "./ItemCounter";
import Filters from "./Filters.jsx";
import {
  apiModify,
  apiGetAll,
  apiDelete,
  apiCreate,
} from "../Services/services.jsx";

const Main = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterMode, setFilterMode] = useState("All");
  const [firstLoading, setFirstLoading] = useState(true);

  //Задания на рендер (берется готовый фильтрованный массив)
  let renderTodos = [];
  switch (filterMode) {
    case "All":
      renderTodos = [...todos];
      break;
    case "Active":
      renderTodos = [...activeTodos];
      break;
    case "Completed":
      renderTodos = [...completedTodos];
      break;
    default:
      alert("Ошибка определения фильтра (switch)");
      break;
  }

  const createTodo = () => {
    if (!text) return null;
    apiCreate(text).then((todo) => setTodos(todo));
  };

  const getAll = () => {
    apiGetAll().then((todo) => setTodos(todo));
  };

  const removeTodos = useCallback(async (id) => {
    apiDelete(id).then(() => getAll());
  });

  const complete = (id) => {
    const currentTodo = todos.find((item) => item._id === id);

    modify(currentTodo._id, currentTodo.todo, !currentTodo.isDone);
  };

  const modify = useCallback(async (id, todo, isDone) => {
    apiModify(id, todo, isDone).then(() => getAll());
  });

  const selectAll = () => {
    let todosTmp = [...todos];
    todosTmp.forEach((curr) => {
      curr.isDone = true;
      apiModify(curr._id, curr.todo, curr.isDone);
    });
    setTodos(todosTmp);
  };

  //Считывание данных при старте
  if (firstLoading) {
    setFirstLoading(false);
    getAll();
  }

  //Активные задания
  const activeTodos = todos.filter((current) => {
    return !current.isDone;
  });

  //Завершенные задания
  const completedTodos = todos.filter((current) => {
    return current.isDone;
  });

  return (
    <div className="container">
      <div className="main-page">
        <Form
          text={text}
          setText={setText}
          createTodo={createTodo}
          getAll={getAll}
          selectAll={selectAll}
        />

        <Todos
          todos={renderTodos}
          complete={complete}
          removeTodos={removeTodos}
        />
        <ItemCounter activeTodos={activeTodos} />
        <Filters filterMode={filterMode} setFilterMode={setFilterMode} />
      </div>
    </div>
  );
};

export default Main;
