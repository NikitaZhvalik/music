import React from "react";
import PropTypes from 'prop-types';

import style from "./style.module.css"

const BurgerIcon = ({show, setShow}) => {
    const toggleShow = () => setShow(!show)

    return (
        <div onClick={toggleShow} className={style.burger}>
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </div>
    );
}

BurgerIcon.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
}
 
export default BurgerIcon;