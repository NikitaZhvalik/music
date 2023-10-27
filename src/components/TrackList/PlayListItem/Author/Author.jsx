import React from "react";
import PropTypes from "prop-types";

import style from  "./style.module.css"

const Author = ({author, isLoading}) => {
    return (
      <div className={style.author}>
        {isLoading ? <div className={style.skeleton}></div> : <a className={style.link} href="http://">{author}</a>}   
      </div>
    )
}

Author.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
}
 
export default Author;