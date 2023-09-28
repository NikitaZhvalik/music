import React from "react";

import filters from "./const";

import "./style.css"

const Filter = () => {
    return (
        <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        {filters.map((filter) => <div key={filter.name} className="filter__button button-genre _btn-text">{filter.name}</div>)}
      </div>
    );
}
 
export default Filter;