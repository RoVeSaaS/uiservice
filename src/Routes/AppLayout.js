import React from 'react';
import { Navigate } from 'react-router-dom';
import APP_ROUTE from './route-constant';

const AppLayout =()=>{
    return <Navigate to={APP_ROUTE.LOGIN} />
};

export default AppLayout;