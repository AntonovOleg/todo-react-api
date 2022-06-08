import React from "react";
import { useState } from "react";

const ItemCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="item-counter">
        {count}   Items left
      </div>
    </React.Fragment>
  );
};

export default ItemCounter;
