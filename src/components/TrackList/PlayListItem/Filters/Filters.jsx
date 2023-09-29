import React, {useState} from "react";

import "./style.css"
import FilterFirst from "./FilterFirst/FilterFirst";
import FilterSecond from "./FilterSecond/FilterSecond";
import FilterThird from "./FilterThird/FilterThird"

const Filters = () => {
  const [popFirst, setPopFirst] = useState(false)
  const [popSecond, setPopSecond]= useState(false)
  const [popThird, setPopThird] = useState(false)

  const modelFirst = () => {
    setPopFirst(!popFirst)
    setPopSecond(false)
    setPopThird(false)
  }

  const modelSecond = () => {
    setPopFirst(false)
    setPopSecond(!popSecond)
    setPopThird(false)
  }

  const modelThird = () => {
    setPopFirst(false)
    setPopSecond(false)
    setPopThird(!popThird)
  }
  
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {popFirst && <FilterFirst />}
      <div onClick={modelFirst} className="filter__button button-genre _btn-text">исполнителю</div>
      {popSecond && <FilterSecond />}
      <div onClick={modelSecond} className="filter__button button-genre _btn-text">году выпуска</div>
      {popThird && <FilterThird /> }
      <div onClick={modelThird} className="filter__button button-genre _btn-text">жанру</div>
    </div>
  )
}
 
export default Filters;