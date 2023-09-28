import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const TrackTime = ({time}) => {
    return (
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{time}</span>
        </div>
    )
}

TrackTime.propTypes = {
    time: PropTypes.string.isRequired,
}
 
export default TrackTime;