import React from "react";

import style from "./style.module.css"

const Logo = () => {
    return (
        <div className={style.logo}>
            <img className={style.image} src="/img/navBar/logo.png" alt="logo" />
        </div>
    );
}
 
export default Logo;