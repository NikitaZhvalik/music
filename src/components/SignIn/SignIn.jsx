import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.css"

const SignIn = () => {
    return (
        <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.block}>
            <form className={style.formLogin} action="#">
              <NavLink to="/">
                <div className={style.logo}>
                  <img src="/img/navBar/logo_modal.png" alt="logo" />
                </div>
              </NavLink>
              <input
                className={style.input}
                type="text"
                name="login"
                placeholder="Почта"
              />
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <NavLink className={style.enter} to="/">
                Войти              
              </NavLink>
              <NavLink className={style.signup} to="/register">
                Зарегистрироваться              
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    )
}
 
export default SignIn;