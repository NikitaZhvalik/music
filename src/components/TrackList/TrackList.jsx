import React from "react";

import PlayListItem from "./PlayListItem/PlayListItem";
import Search from "./PlayListItem/Search/Search";

import PlayListMusic from "./const"
import Filters from "./PlayListItem/Filters/Filters";
import ContentTitle from "./PlayListItem/ContentTitle/ContentTitle";
import PropTypes from 'prop-types';

import style from "./style.module.css";

const TrackList = ({isLoading}) => {
    return (
        <div>
          <div className={style.center}>
            <Search />
            <h2 className={style.subtitle}>Треки</h2>
            <Filters />

            <div className={style.content}>
              <ContentTitle />

              <div className={style.playlist}>
                {PlayListMusic.map((data) => <PlayListItem key={data.id} data={data} isLoading={isLoading}/>)}
              </div>
            </div>
          </div>
        </div>
    )
}

TrackList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}
 
export default TrackList;