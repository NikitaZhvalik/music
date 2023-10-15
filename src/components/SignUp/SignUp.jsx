import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.css"

const SignUp = () => {
    return (
        <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.block}>
            <form className={style.formLogin}>
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
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <NavLink to="/" className={style.ent}>
                Зарегистрироваться
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default SignUp;