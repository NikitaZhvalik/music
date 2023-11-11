import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';

export function ProtectedRoute({ redirectPath, auth }) {
    return auth!==null ? <Outlet /> : <Navigate to={redirectPath} replace />
}

ProtectedRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string.isRequired,
}