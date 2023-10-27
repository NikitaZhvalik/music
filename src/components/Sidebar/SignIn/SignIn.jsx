import React from "react";

import style from "./style.module.css"

const SignIn = () => {
    return (
        <div className={style.personal}>
            <p className={style.name}>Sergey.Ivanov</p>
            <div className={style.icon}>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </div>
        </div>
    );
}
 
export default SignIn;