import React from "react";
import PropTypes from "prop-types";

import Title from "../PlayListItem/Title/Title";
import Author from "../PlayListItem/Author/Author";
import Album from "../PlayListItem/Album/Album";
import TrackTime from "../PlayListItem/TrackTime/TrackTime"

import style from "./style.module.css";

const Skeletons = ({isLoading}) => {
    return (
        <div className={style.item}>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
            <div className={style.track}>
                <Title isLoading={isLoading} />
                <Author isLoading={isLoading} />
                <Album isLoading={isLoading}  />
                <TrackTime isLoading={isLoading} />
            </div>
        </div>
    )
}

Skeletons.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default Skeletons;