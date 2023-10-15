import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css"

const Title = ({ title, span, isLoading }) => {
    return (
        <div className={style.title}>
            <div className={style.image}>
                <svg className={style.svg} alt="music">
                    {isLoading ? "" : <use xlinkHref="img/icon/sprite.svg#icon-note"></use>}
                </svg>
            </div>
            <div className={style.text}>
                 {isLoading ? <div className={style.skeleton}></div> : <a className={style.link} href="http://">{title} <span className="track__title-span">{span}</span></a>}   
            </div>
        </div>
    )
}

Title.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    span: PropTypes.string
}

export default Title;
