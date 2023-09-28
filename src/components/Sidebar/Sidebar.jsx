import React from "react";

import imgs from "./const.js";
import "./style.css";

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
                {imgs.map((img) => {
                  return (
                    <div key={img.id} className="sidebar__item">
                      <a className="sidebar__link" href="#">
                        <img
                          className="sidebar__img"
                          src={img.src}
                          alt={img.alt}
                        />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    )
}
 
export default Sidebar;