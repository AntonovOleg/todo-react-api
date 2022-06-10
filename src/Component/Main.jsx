import React, { useEffect, useState, useCallback } from "react";
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
  apiDeleteAll,
} from "../Services/services.jsx";

const Main = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(null);
  const [filterMode, setFilterMode] = useState("All");
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [renderTodos, setRenderTodos] = useState([]);

  useEffect(() => {
    if (!todos) {
      getAll();
    }
    initFiltersData();
  }, [todos, filterMode, initFiltersData]);

  const createTodo = () => {
    if (!text) return null;
    apiCreate(text).then(() => {
      getAll();
    });
    setText("");
  };

  const getAll = () => {
    apiGetAll().then((todo) => {
      setTodos(todo);
    });
  };

  const removeTodos = useCallback((id) => {
    apiDelete(id).then(() => getAll());
  });

  const complete = (id) => {
    const currentTodo = todos.find((item) => item._id === id);

    modify(currentTodo._id, currentTodo.todo, !currentTodo.isDone);
  };

  const modify = useCallback((id, todo, isDone) => {
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

  const deleteAll = () => {
    apiDeleteAll();
    setRenderTodos([]);
  };

  const initFiltersData = () => {
    if (!todos) return null;
    //Активные
    setActiveTodos(todos.filter((current) => !current.isDone));
    //Завершенные
    setCompletedTodos(todos.filter((current) => current.isDone));
    // Текущий
    switch (filterMode) {
      case "All":
        setRenderTodos([...todos]);
        break;
      case "Active":
        setRenderTodos([...activeTodos]);
        break;
      case "Completed":
        setRenderTodos([...completedTodos]);
        break;
      default:
        alert("Ошибка определения фильтра (switch)");
        break;
    }
  };

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
          modify={modify}
          selectAll={selectAll}
          deleteAll={deleteAll}
        />

        <ItemCounter activeTodos={activeTodos} />

        <Filters filterMode={filterMode} setFilterMode={setFilterMode} />
      </div>
    </div>
  );
};

export default Main;
