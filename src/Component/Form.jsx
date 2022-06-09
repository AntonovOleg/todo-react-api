import React from "react";
import InputField from "./InputField.jsx";

const Form = (props) => {
  const { setText, text, createTodo } = props;

  return (
    <React.Fragment>
      <h4>Добавить задачу</h4>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <InputField text={text} setText={setText} createTodo={createTodo} />
      </form>
    </React.Fragment>
  );
};

export default Form;
