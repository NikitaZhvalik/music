import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Album = ({album, isLoading}) => {
    return (
        <div className="track__album">
            {isLoading ? <div className="skeleton__album"></div> : <a className="track__album-link" href="http://">{album}</a>}
        </div>
    )
}

Album.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    album: PropTypes.string.isRequired,
}
 
export default Album;