import React from "react";
import PropTypes from 'prop-types';

import style from "./style.module.css"

const imgs = [
    {img: "/img/aside/playlist01.png", path: "#", alt: "day's playlist"},
    {img: "/img/aside/playlist02.png", path: "#", alt: "for dance"},
    {img: "/img/aside/playlist03.png", path: "#", alt: "indie charge"}
]

const Imgs = ({isLoading}) => {
    return (
        <div className={style.block}>
            <div className={style.list}>
                {
                    imgs.map((img) => {
                        return (
                            <div key={img.img} className={style.item}>
                            {
                                isLoading ? <div className={style.skeleton}></div> 
                                :
                                <a className={style.link} href={img.path}>
                                <img
                                    className={style.img}
                                    src={img.img}
                                    alt={img.alt}
                                />
                                </a>
                            }
                            </div>
                        )
                    })
                }
            </div>
    </div>
    );
}

Imgs.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
 
export default Imgs;