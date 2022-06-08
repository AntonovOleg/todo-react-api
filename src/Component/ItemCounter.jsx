import React from "react";
import { useState } from "react";

const ItemCounter = (props) => {
  return (
    <React.Fragment>
      <div className="item-counter">
        Активных задач: {props.activeTodos.length}
      </div>
    </React.Fragment>
  );
};

export default ItemCounter;
