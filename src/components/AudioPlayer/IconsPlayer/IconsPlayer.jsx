import React from "react";

import style from "./style.module.css";

const IconsPlayer = () => {
    return (
        <div className={style.controls}>
            <div className={style.prev}>
              <svg className={style.prevSvg} alt="prev">
                <use xlinkHref={`img/icon/sprite.svg#icon-prev`}></use>
              </svg>
            </div>
            <div className={style.play}>
              <svg className={style.playSvg} alt="play">
                <use xlinkHref={`img/icon/sprite.svg#icon-play`}></use>
              </svg>
            </div>
            <div className={style.next}>
              <svg className={style.nextSvg} alt="next">
                <use xlinkHref={`img/icon/sprite.svg#icon-next`}></use>
              </svg>
            </div>
            <div className={style.repeat}>
              <svg className={style.repeatSvg} alt="repeat">
                <use xlinkHref={`img/icon/sprite.svg#icon-repeat`}></use>
              </svg>
            </div>
            <div className={style.shuffle}>
              <svg className={style.shuffleSvg} alt="shuffle">
                <use xlinkHref={`img/icon/sprite.svg#icon-shuffle`}></use>
              </svg>
            </div>
      </div>
    );
}
 
export default IconsPlayer;