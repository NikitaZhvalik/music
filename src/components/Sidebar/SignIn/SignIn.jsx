import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css"

const deleteCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

const SignIn = () => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        deleteCookie('user')
        navigate('/login')
    }, [navigate])

    return (
        <div className={style.personal}>
            <p className={style.name}>Sergey.Ivanov</p>
            <div className={style.icon} onClick={handleClick}>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </div>
        </div>
    )
}
 
export default SignIn
