import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext/AuthProvider';

const RequireAuth = ({ children }) => {
    const { loading, user } = useContext(authContext);

    const location = useLocation();

    if (loading) {
        return <button className="btn loading">loading</button>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default RequireAuth;