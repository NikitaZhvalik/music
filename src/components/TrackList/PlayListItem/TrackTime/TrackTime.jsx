import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css"

const TrackTime = ({time, isLoading}) => {
    return (
        <div className={style.time}>
            <svg className={style.svg} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={style.text}>{isLoading ? '00:00' : time}</span>
        </div>
    )
}

TrackTime.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
}
 
export default TrackTime;