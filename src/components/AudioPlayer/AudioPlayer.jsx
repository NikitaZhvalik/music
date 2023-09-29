import React from "react";
import {iconsPlayer, iconsLiked} from "./const";
import PropTypes from 'prop-types';

import "./style.css";

const AudioPlayer = ({isLoading}) => {
    return (
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress"></div>
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  {iconsPlayer.map((icon) => {
                    return (
                      <div key={icon.name} className={`player__btn-${icon.name}`}>
                        <svg className={`player__btn-${icon.name}-svg`} alt={icon.name}>
                          <use xlinkHref={`img/icon/sprite.svg#icon-${icon.name}`}></use>
                        </svg>
                      </div>
                    )
                  })}
                </div>

                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                        <div className="track-play__image">
                        {isLoading ? '' : 
                            <svg className="track-play__svg" alt="music">
                              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        }
                        </div>
                    <div className="track-play__author">
                      {isLoading ? <div className="skeleton__audioPlayer"></div> : <a className="track-play__author-link" href="http://">Ты та...</a>}
                    </div>
                    <div className="track-play__album">
                      {isLoading ? <div className="skeleton__audioPlayer"></div> : <a className="track-play__album-link" href="http://">Баста</a>}
                    </div>
                  </div>

                  <div className="track-play__like-dis">
                    {iconsLiked.map((icon) => {
                      return (
                        <div key={icon.name} className={`track-play__${icon.name} _btn-icon`}>
                          <svg className={`track-play__${icon.name}-svg`} alt={icon.name}>
                            <use xlinkHref={`img/icon/sprite.svg#icon-${icon.name}`}></use>
                          </svg>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
 

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default AudioPlayer;