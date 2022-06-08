// import { PromiseProvider } from "mongoose";
import React from "react";
import "./Filters.css";

const Filters = (props) => {
  const { filterMode, setFilterMode } = props;
  //классы для кнопок фильтров с учетом текущего фильтра
  const btnFilterAllClassName = `filter filter-all ${
    filterMode === "All" ? "selected" : null
  }`;
  const btnFilterActiveClassName = `filter filter-active ${
    filterMode === "Active" ? "selected" : null
  }`;
  const btnFilterCompletedClassName = `filter filter-completed ${
    filterMode === "Completed" ? "selected" : null
  }`;

  return (
    <React.Fragment>
      <div className="filters-wrapper">
        <div
          className={btnFilterAllClassName}
          onClick={() => setFilterMode("All")}
        >
          Все
        </div>
        <div
          className={btnFilterActiveClassName}
          onClick={() => setFilterMode("Active")}
        >
          Активные
        </div>
        <div
          className={btnFilterCompletedClassName}
          onClick={() => setFilterMode("Completed")}
        >
          Завершённые
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filters;
