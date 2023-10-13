import React, { useState } from "react";

import "./style.css";
import FilterFirst from "./FilterFirst/FilterFirst";
import FilterSecond from "./FilterSecond/FilterSecond";
import FilterThird from "./FilterThird/FilterThird";

const Filters = () => {
	const [filter, setFilter] = useState(null)

	const handleClick = (value) => filter === value ? setFilter(null) : setFilter(value)

	const btnClassName = "filter__button button-genre _btn-text"
	const activeBtnClassName = btnClassName + " filter__button_active"

	return (
		<div className="centerblock__filter filter">
			<div className="filter__title">Искать по:</div>
			{filter === "authors" && <FilterFirst />}
			<div onClick={() => handleClick("authors")} className={filter === "authors" ? activeBtnClassName : btnClassName}>
				исполнителю
			</div>{filter === "date" && <FilterSecond />}
			<div onClick={() => handleClick("date")} className={filter === "date" ? activeBtnClassName : btnClassName}>
				году выпуска
			</div>
			{filter === "genres" && <FilterThird />}
			<div onClick={() => handleClick("genres")} className={filter === "genres" ? activeBtnClassName : btnClassName}>
				жанру
			</div>
		</div>
	)
}

export default Filters;
