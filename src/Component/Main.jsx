import React from "react";
import { useState, useContext, useCallback } from "react";
import "./Main.css";
import axios from "axios";
import Form from "./Form.jsx";
import Todos from "./Todos.jsx";
import ItemCounter from "./ItemCounter";
import Filters from "./Filters.jsx";
import {
  axios_put,
  axios_get_all,
  axios_delete,
  axios_create,
} from "../Services/services.jsx";

const Main = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterMode, setFilterMode] = useState("All");
  const [firstLoading, setFirstLoading] = useState(true);

  //Активные задания
  const active_todos = todos.filter((current) => {
    return !current.isDone;
  });

  //Завершенные задания
  const completed_todos = todos.filter((current) => {
    return current.isDone;
  });

  //Задания на рендер
  let render_todos = [];
  switch (filterMode) {
    case "All":
      render_todos = [...todos];
      break;
    case "Active":
      render_todos = [...active_todos];
      break;
    case "Completed":
      render_todos = [...completed_todos];
      break;
    default:
      alert("Ошибка определения фильтра (switch)");
      break;
  }

  const createTodo = useCallback(async () => {
    if (!text) return null;
    try {
      axios_create(text, todos, setText, setTodos);
    } catch {
      console.log("Ошибка");
    }
    getAll();
  }, [text, todos]);

  const getAll = useCallback(async () => {
    try {
      axios_get_all(
        "/todo/getall",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        setTodos
      );
    } catch {}
  }, []);

  const removeTodos = useCallback(async (id) => {
    try {
      axios_delete(id, getAll);
    } catch {}
  });

  const complete = (id) => {
    const current_todo = todos.filter((curr) => curr._id === id)[0];
    modify(current_todo._id, current_todo.todo, !current_todo.isDone);
  };

  const modify = useCallback(async (id, todo, isDone) => {
    try {
      axios_put(id, todo, isDone, getAll);
    } catch {}
  }, []);

  const selectAll = () => {
    let todos2 = [...todos];
    todos2.forEach((curr) => {
      curr.isDone = true;
      axios_put(curr._id, curr.todo, curr.isDone);
    });
    setTodos(todos2);
  };

  //Считывание данных при старте
  if(firstLoading) {
    setFirstLoading(false);
    getAll();
  }

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
          todos={render_todos}
          complete={complete}
          removeTodos={removeTodos}
        />
        <ItemCounter active_todos={active_todos} />
        <Filters filterMode={filterMode} setFilterMode={setFilterMode} />
      </div>
    </div>
  );
};

export default Main;
