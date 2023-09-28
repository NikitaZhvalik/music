import React from "react";
import PropTypes from "prop-types";

const Album = ({album}) => {
    return (
        <div className="track__album">
            <a className="track__album-link" href="http://">{album}</a>
        </div>
    )
}

Album.propTypes = {
    album: PropTypes.string.isRequired,
}
 
export default Album;