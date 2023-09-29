import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Author = ({author, isLoading}) => {
    return (
      <div className="track__author">
        {isLoading ? <div className="skeleton__author"></div> : <a className="track__author-link" href="http://">{author}</a>}   
      </div>
    )
}

Author.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
}
 
export default Author;