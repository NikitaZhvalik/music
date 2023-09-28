import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, span }) => {
    return (
        <div className="track__title">
            <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track__title-text">
                <a className="track__title-link" href="http://">
                    {title} <span className="track__title-span">{span}</span>
                </a>
            </div>
        </div>
    )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  span: PropTypes.string
}

export default Title;
