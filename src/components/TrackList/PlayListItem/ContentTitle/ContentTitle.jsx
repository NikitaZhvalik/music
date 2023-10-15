import React from 'react'

import style from './style.module.css'

const ContentTitle = () => {
  return (
    <div className={style.title}>
      <div className={`${style.col} ${style.col1}`}>Трек</div>
      <div className={`${style.col} ${style.col2}`}>ИСПОЛНИТЕЛЬ</div>
      <div className={`${style.col} ${style.col3}`}>АЛЬБОМ</div>

      <div className={`${style.col} ${style.col4}`}>
        <svg className={style.svg} alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  )
}

export default ContentTitle
