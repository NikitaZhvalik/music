import React from "react";

import style from "./FilterThird.module.css";

const FilterThird = () => {
    return (
        <div> 
            <div className={style.model}>
                <ul className={style.model__ul}>
                    <li className={style.model__li}>Рок</li>
                    <li className={style.model__li}>Хип-хоп</li>
                    <li className={style.model__li}>Поп-музыка</li>
                    <li className={style.model__li}>Техно</li>
                    <li className={style.model__li}>Инди</li>
                    <li className={style.model__li}>Инди</li>
                    <li className={style.model__li}>Инди</li>
                    <li className={style.model__li}>Инди</li>
                    <li className={style.model__li}>Инди</li>
                    <li className={style.model__li}>Инди</li>
                </ul>
            </div>
        </div>
    )
}
 
export default FilterThird;