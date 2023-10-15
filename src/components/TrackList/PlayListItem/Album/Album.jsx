import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css"

const Album = ({album, isLoading}) => {
    return (
        <div className={style.album}>
            {isLoading ? <div className={style.skeleton}></div> : <a className={style.link} href="http://">{album}</a>}
        </div>
    )
}

Album.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    album: PropTypes.string.isRequired,
}
 
export default Album;