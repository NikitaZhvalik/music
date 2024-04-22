import React from 'react'
import s from './style.module.css'

const MenuList = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a href="#" className={s.link}>
          Главное
        </a>
      </li>
      <li className={s.item}>
        <a href="#" className={s.link}>
          Мой плейлист
        </a>
      </li>
      <li className={s.item}>
        <a href="#" className={s.link}>
          Войти
        </a>
      </li>
    </ul>
  )
}

export default MenuList
