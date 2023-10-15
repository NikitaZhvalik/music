import React from "react";
import PropTypes from 'prop-types';

import SignIn from "./SignIn/SignIn.jsx";
import Imgs from "./Imgs/Imgs.jsx";

const Sidebar = ({isLoading}) => {
    return (
        <div>
          <div>
            <SignIn />
            <Imgs isLoading={isLoading} />
          </div>
        </div>
    )
}

Sidebar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}
 
export default Sidebar;