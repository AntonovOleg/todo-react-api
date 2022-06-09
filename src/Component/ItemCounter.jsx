import React from "react";

const ItemCounter = ({ activeTodos }) => {
  return (
    <React.Fragment>
      <div className="item-counter">Активных задач: {activeTodos.length}</div>
    </React.Fragment>
  );
};

export default ItemCounter;
