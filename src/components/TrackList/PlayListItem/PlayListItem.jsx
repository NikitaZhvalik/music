import React from "react";
import PropTypes from "prop-types";
import Title from "./Title/Title";
import Author from "./Author/Authir";
import Album from "./Album/Album";
import TrackTime from "./TrackTime/TrackTime";

import "./style.css"

const PlayListItem = ({ data }) => {
    const { title, span, author, album, time } = data

    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <Title title={title} span={span} />
                <Author author={author} />
                <Album album={album} />
                <TrackTime time={time} />
            </div>
        </div>
    )
}

PlayListItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        span: PropTypes.string,
        author: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired
}

export default PlayListItem;
