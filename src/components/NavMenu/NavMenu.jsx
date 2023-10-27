import React, { useState } from "react";

// import "./style.css"

import BurgerIcon from "./BurgerIcon/BurgerIcon";
import Logo from "./Logo/Logo";
import MenuList from "./MenuList/MenuList";

import style from "./style.module.css"

const NavMenu = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
          <nav className={style.main}>
            <Logo />
            <BurgerIcon show={show} setShow={setShow}/>
            <MenuList show={show}/>
          </nav>
        </div>
    )
}
 
export default NavMenu;