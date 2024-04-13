import React from "react";
import PropTypes from "prop-types";

import { convertSecondsToMinutes } from "../../../../utils/convertSecondsToMinutes";
import style from "./style.module.css"

const TrackTime = ({time, isLoading}) => {
    const { convertTime } = convertSecondsToMinutes(time)

    return (
        <div className={style.time}>
            <svg className={style.svg} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={style.text}>{isLoading ? '00:00' : convertTime}</span>
        </div>
    )
}

TrackTime.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired,
}
 
export default TrackTime;