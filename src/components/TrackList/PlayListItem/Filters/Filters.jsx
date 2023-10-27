import React, { useState } from "react";

import FilterFirst from "./FilterFirst/FilterFirst";
import FilterSecond from "./FilterSecond/FilterSecond";
import FilterThird from "./FilterThird/FilterThird";

import style from "./style.module.css"

const Filters = () => {
	const [filter, setFilter] = useState(null)

	const handleClick = (value) => filter === value ? setFilter(null) : setFilter(value)

	// const btnClassName = {style.button}
	// const activeBtnClassName = btnClassName + " filter__button_active"

	return (
		<div className={style.filter}>
			<div className={style.title}>Искать по:</div>
			{filter === "authors" && <FilterFirst />}
			<div onClick={() => handleClick("authors")} className={filter === "authors" ? style.buttonActive : style.button}>
				исполнителю
			</div>{filter === "date" && <FilterSecond />}
			<div onClick={() => handleClick("date")} className={filter === "date" ? style.buttonActive : style.button}>
				году выпуска
			</div>
			{filter === "genres" && <FilterThird />}
			<div onClick={() => handleClick("genres")} className={filter === "genres" ? style.buttonActive : style.button}>
				жанру
			</div>
		</div>
	)
}

export default Filters;
