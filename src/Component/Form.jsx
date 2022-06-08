import React from "react";
import InputField from "./InputField.jsx";

const Form = (props) => {
  const { setText, text, createTodo, getAll, selectAll } = props;
  return (
    <React.Fragment>
      <h4>Добавить задачу</h4>
      <form className="form" onSubmit={(e) => e.preventDefault()}>

        <InputField text={text} setText={setText} />

        <div className="row">
          <button
            onClick={createTodo}
            className="waves-effect waves-light btn blue"
          >
            Добавить
          </button>
        </div>
        <button onClick={getAll}>getALL</button>
        <button onClick={selectAll}>Complete All</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
