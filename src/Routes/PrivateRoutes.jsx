import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoutes = ({ children }) => {

    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if( loading ){
        <Loading></Loading>
    }
    
    if( user && user?.email ){
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
        </div>
    );
};

export default PrivateRoutes;