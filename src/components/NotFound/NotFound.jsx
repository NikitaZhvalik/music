import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css"

const NotFound = () => {
    return (
        <div className={style.container}>
            <h1 className={style.heading}>404</h1>
            <div className={style.content}>
                <p className={style.text}>Страница не найдена</p>
                <img className={style.img} src="/img/404/crying.png" alt="" />
            </div>
            <p className={style.descr}>Возможно, она была удалена или перенесена на другой адрес</p>
            <Link to='/' className={style.link}>
                Вернуться на главную
            </Link>
        </div>
    )
}
 
export default NotFound;