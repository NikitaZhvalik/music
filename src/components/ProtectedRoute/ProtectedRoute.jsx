import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import PropTypes from 'prop-types';

export const ProtectedRoute =({redirectPath, isAllowed}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={redirectPath}/>
    }

    return <Outlet />
}

ProtectedRoute.propTypes = {
    redirectPath: PropTypes.string.isRequired,
    isAllowed: PropTypes.bool.isRequired,
}