import React from "react";
import PropTypes from 'prop-types';

import style from "./style.module.css"

const MenuList = ({show}) => {
    return (
            show ?             
                  <div className={style.nav}>
                  <ul className={style.list}>
                      <li className={style.item}>
                        <a href="#" className={style.link}>Главное</a>
                      </li>
                      <li className={style.item}>
                        <a href="#" className={style.link}>Мой плейлист</a>
                      </li>
                      <li className={style.item}>
                        <a href="#" className={style.link}>Войти</a>
                      </li>
                  </ul>
                </div> 
            : ''
    );
}

MenuList.propTypes = {
    show: PropTypes.bool.isRequired,
}
 
export default MenuList;