import React from 'react'

import s from './style.module.css'

const Logo = () => {
  return (
    <div className={s.logo}>
      <img className={s.image} src="/img/navBar/logo.png" alt="logo" />
    </div>
  )
}

export default Logo
