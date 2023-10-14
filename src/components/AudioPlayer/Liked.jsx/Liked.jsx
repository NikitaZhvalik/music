import React from 'react';

// const iconsLiked = [
//     {  name: "like" },
//     {  name: "dislike" },
// ]

import style from "./style.module.css"

const Liked = () => {
    return (
        <div className={style.liked}>
            <div className={`${style.like} _btn-icon`}>
                <svg className={`${style.likeSvg}`} alt="like">
                    <use xlinkHref={`img/icon/sprite.svg#icon-like`}></use>
                </svg>
            </div>
            <div className={`${style.dislike} _btn-icon`}>
                <svg className={`${style.dislikeSvg}`} alt="dislike">
                    <use xlinkHref={`img/icon/sprite.svg#icon-dislike`}></use>
                </svg>
            </div>
        </div>
    );
}
 
export default Liked;