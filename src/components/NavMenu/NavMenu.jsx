import React from "react";

import "./style.css"
import menuItem from "./const.js"

const NavMenu = () => {
    return (
        <div>
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="/public/img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            <div className="nav__menu menu">
              <ul className="menu__list">
              {menuItem.map((item) => {
                return (
                  <li key={item.name} className="menu__item">
                    <a href={item.link} className="menu__link">{item.name}</a>
                  </li>
                )
              })}
              </ul>
            </div>
          </nav>
        </div>
    )
}
 
export default NavMenu;