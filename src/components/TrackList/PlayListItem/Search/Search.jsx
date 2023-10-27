import React from "react"

import style from "./style.module.css"

const Search = () => {
    return (
            <div className={style.search}>
              <svg className={style.svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={style.text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
    );
}
 
export default Search;