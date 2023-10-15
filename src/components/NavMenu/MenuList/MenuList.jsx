import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import style from "./style.module.css"

const MenuList = ({show}) => {
    return (
            show ?             
                  <div className={style.nav}>
                  <ul className={style.list}>
                      <li className={style.item}>
                        <Link className={style.link} to='/'>
                          Главное
                        </Link>
                      </li>
                      <li className={style.item}>
                        <Link className={style.link} to='/favorites'>
                          Мой плейлист
                        </Link>
                      </li>
                      <li className={style.item}>
                        <Link className={style.link} to='/'>
                          Войти
                        </Link>
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