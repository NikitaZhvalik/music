import React from "react";

import "./style.css";
import PlayListItem from "./PlayListItem/PlayListItem";
import Search from "./PlayListItem/Search/Search";

import PlayListMusic from "./const"
import Filter from "./PlayListItem/Filter/Filter";
import ContentTitle from "./PlayListItem/ContentTitle/ContentTitle";
import PropTypes from 'prop-types';

const TrackList = ({isLoading}) => {
    return (
        <div>
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />

            <div className="centerblock__content">
              <ContentTitle />

              <div className="content__playlist playlist">
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