import React from "react";

import PlayListItem from "./PlayListItem/PlayListItem";
import Search from "./PlayListItem/Search/Search";

import Filters from "./PlayListItem/Filters/Filters";
import ContentTitle from "./PlayListItem/ContentTitle/ContentTitle";
import PropTypes from 'prop-types';

import style from "./style.module.css";
import Skeletons from "./Skeletons/Skeletons";

const TrackList = ({data, isLoading, error, trackPlay, setTrackPlay}) => {
    return (
        <div>
          <div className={style.center}>
            <Search />
            <h2 className={style.subtitle}>Треки</h2>
            <Filters />

            <div className={style.content}>
              <ContentTitle />

              <div className={style.playlist}>
                {error ? <div><h1 className={style.subtitle}>{`Не удалось загрузить плейлист. Попробуйте позже. ${error}`}</h1></div> 
                  : 
                (data && data.map((data) => <PlayListItem trackPlay={trackPlay} setTrackPlay={setTrackPlay} key={data.id} data={data} isLoading={isLoading} error={error} />))}
                {(!data && <Skeletons isLoading={isLoading} />)}
              </div>
            </div>
          </div>
        </div>
    )
}

TrackList.propTypes = {
  trackPlay: PropTypes.any, // todo
  setTrackPlay: PropTypes.any, // todo
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
}
 
export default TrackList;