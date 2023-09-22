import React from "react";

import img1 from '../../static/img/playlist01.png'
import img2 from '../../static/img/playlist02.png'
import img3 from '../../static/img/playlist03.png'

const Sidebar = () => {
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
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src={img1}
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src={img2}
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src={img3}
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
 
export default Sidebar;