import React from "react";
import PropTypes from 'prop-types';

import imgs from "./const.js";
import "./style.css";

const Sidebar = ({isLoading}) => {
    return (
        <div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
                <div className="sidebar__list">
                  {imgs.map((img) => {
                    return (
                      <div key={img.id} className="sidebar__item">
                        {isLoading ? <div className="skeleton__sidebar"></div> :
                        <a className="sidebar__link" href="#">
                          <img
                            className="sidebar__img"
                            src={img.src}
                            alt={img.alt}
                          />
                        </a>
                        }
                      </div>
                    )
                  })}
                </div>
            </div>
          </div>
        </div>
    )
}

Sidebar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}
 
export default Sidebar;