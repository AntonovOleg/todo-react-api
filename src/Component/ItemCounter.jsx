import React from "react";
import { useState } from "react";

const ItemCounter = (props) => {
  return (
    <React.Fragment>
      <div className="item-counter">{props.active_todos.length} Items left</div>
    </React.Fragment>
  );
};

export default ItemCounter;
