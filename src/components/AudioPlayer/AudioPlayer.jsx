import React from "react";
import PropTypes from 'prop-types';

import Liked from "./Liked.jsx/Liked";
import Note from "./Note/Note";
import IconsPlayer from "./IconsPlayer/IconsPlayer";
import Volume from "./Volume/Volume";

import style from "./style.module.css"

const AudioPlayer = ({isLoading}) => {
    return (
        <div className={style.bar}>
          <div className={style.content}>
            <div className={style.playerProgress}></div>
            <div className={style.playerBlock}>
              <div className={style.player}>
                <IconsPlayer />

                <div className={style.trackPlay}>

                  <Note isLoading={isLoading}/>
                  <Liked />
                </div>
              </div>
              <Volume />
            </div>
          </div>
        </div>
    )
}
 

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default AudioPlayer;