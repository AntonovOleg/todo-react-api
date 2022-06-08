import React from "react";

const InputField = (props) => {
  const { text, setText } = props;
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          id="text"
          name="input"
          onChange={(e) => setText(e.target.value)}
          className="validate"
          value={text}
        />
        <label htmlFor="input">Задача</label>
      </div>
    </div>
  );
};

export default InputField;
