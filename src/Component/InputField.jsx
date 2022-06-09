import React from "react";

const InputField = (props) => {
  const { text, setText, createTodo } = props;

  return (
    <div className="row input-row">
      <div className="input-field col s12">
        <input
          type="text"
          id="text"
          name="input"
          onChange={(e) => setText(e.target.value)}
          className="validate"
          value={text}
          onKeyDown={(key) => (key.keyCode === 13 ? createTodo() : null)}
        />
        <label htmlFor="input" className="label">
          Задача
        </label>
      </div>
    </div>
  );
};

export default InputField;
