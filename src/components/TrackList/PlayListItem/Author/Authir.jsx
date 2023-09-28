import React from "react";
import PropTypes from "prop-types";

const Author = ({author}) => {
    return (
        <div className="track__author">
        <a className="track__author-link" href="http://">{author}</a>
      </div>
    )
}

Author.propTypes = {
  author: PropTypes.string.isRequired,
}
 
export default Author;