import React from "react";

import style from "./FilterSecond.module.css";

const FilterSecond = () => {
    return (
        <div> 
            <div className={style.model}>
                <ul className={style.model__ul}>
                    <li className={style.model__li}>По умолчанию</li>
                    <li className={style.model__li}>Сначала новые</li>
                    <li className={style.model__li}>Сначала старые</li>
                </ul>
            </div>
        </div>
    )
}
 
export default FilterSecond;