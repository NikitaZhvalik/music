import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import style from "./style.module.css"

const imgs = [
    {img: "/img/aside/playlist01.png", path: "/category/1", alt: "day's playlist"},
    {img: "/img/aside/playlist02.png", path: "/category/2", alt: "for dance"},
    {img: "/img/aside/playlist03.png", path: "/category/3", alt: "indie charge"}
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
                                <Link className={style.link} to={img.path}>
                                    <img
                                        className={style.img}
                                        src={img.img}
                                        alt={img.alt}
                                    />
                                </Link>
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