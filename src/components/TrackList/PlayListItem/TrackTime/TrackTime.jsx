import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const TrackTime = ({time, isLoading}) => {
    return (
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{isLoading ? '00:00' : time}</span>
        </div>
    )
}

TrackTime.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
}
 
export default TrackTime;