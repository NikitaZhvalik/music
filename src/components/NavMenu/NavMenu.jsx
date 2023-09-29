import React, { useState } from "react";

import "./style.css"
import menuItem from "./const.js"

const NavMenu = () => {

    const [show, setShow] = useState(true)
    const toggleShow = () => setShow(!show)

    return (
        <div>
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="/img/logo.png" alt="logo" />
            </div>
            <div onClick={toggleShow} className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            {
              show ?             
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
              : ''
            }
          </nav>
        </div>
    )
}
 
export default NavMenu;