import React from "react";

import style from "./style.module.css"

const Volume = () => {
    return (
        <div className={`${style.volumeBlock} ${style.volume}`}>
          <div className={style.content}>
            <div className={style.image}>
              <svg className={style.svg} alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div className={style.progress}>
              <input
                className={style.progressLine}
                type="range"
                name="range"
              />
            </div>
          </div>
      </div>
    );
}
 
export default Volume;