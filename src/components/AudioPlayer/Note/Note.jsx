import React from "react";
import PropTypes from 'prop-types';

import style from "./style.module.css"

const Note = ({isLoading}) => {
    return (
        <div className={style.contain}>
                <div className={style.image}>
                {isLoading ? '' : 
                    <svg className={style.svg} alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                }
                </div>
            <div className={style.author}>
            {isLoading ? <div className={style.skeleton}></div> : <a className={style.authorLink} href="http://">Ты та...</a>}
            </div>
            <div className={style.album}>
            {isLoading ? <div className={style.skeleton}></div> : <a className={style.albumLink} href="http://">Баста</a>}
            </div>
        </div>
    );
}
 
Note.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default Note;