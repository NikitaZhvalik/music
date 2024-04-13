import React from "react";
import PropTypes from "prop-types";
import Title from "./Title/Title";
import Author from "./Author/Author";
import Album from "./Album/Album";
import TrackTime from "./TrackTime/TrackTime";

import style from "./style.module.css"

const PlayListItem = ({ data, isLoading, trackPlay, setTrackPlay }) => {
    const { album, author, duration_in_seconds:time, genre, id, logo, name: title, release_date, span, track_file } = data
    
    return (
        <div className={style.item}>
            <div className={style.track}>
                <Title trackPlay={trackPlay} setTrackPlay={setTrackPlay} isLoading={isLoading} title={title} span={span} />
                <Author isLoading={isLoading} author={author} />
                <Album isLoading={isLoading} album={album} />
                <TrackTime isLoading={isLoading} time={time} />
            </div>
        </div>
    )
}

PlayListItem.propTypes = {
    trackPlay: PropTypes.any, //todo
    setTrackPlay: PropTypes.any, //todo
    data: PropTypes.shape({
        album: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        duration_in_seconds: PropTypes.number.isRequired,
        genre: PropTypes.string,
        id: PropTypes.number,
        logo: PropTypes.string,
        name: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        track_file: PropTypes.string,
        span: PropTypes.string,
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default PlayListItem
