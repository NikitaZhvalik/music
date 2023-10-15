import React from "react";
import PropTypes from 'prop-types';

import style from "./style.module.css"

const Imgs = ({isLoading}) => {
    return (
        <div className={style.block}>
            <div className={style.list}>
                <div className={style.item}>
                    {
                        isLoading ? <div className={style.skeleton}></div> 
                        :
                        <a className={style.link} href="#">
                        <img
                            className={style.img}
                            src="/img/aside/playlist01.png"
                            alt="day's playlist"
                        />
                        </a>
                    }
                </div>
                <div className={style.item}>
                    {
                        isLoading ? <div className={style.skeleton}></div> 
                        :
                        <a className={style.link} href="#">
                        <img
                            className={style.img}
                            src="/img/aside/playlist01.png"
                            alt="day's playlist"
                        />
                        </a>
                    }
                </div>
                <div className={style.item}>
                    {
                        isLoading ? <div className={style.skeleton}></div> 
                        :
                        <a className={style.link} href="#">
                        <img
                            className={style.img}
                            src="/img/aside/playlist01.png"
                            alt="day's playlist"
                        />
                        </a>
                    }
                </div>
            </div>
    </div>
    );
}

Imgs.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
 
export default Imgs;