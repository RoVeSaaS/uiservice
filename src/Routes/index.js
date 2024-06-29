import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Layout/Login';
import routes from './route-constant';
import AppLayout from './AppLayout';

const RouterConfig = ()=>{
    return <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path={"/"} element={<AppLayout />} />
        <Route path={routes.LOGIN} element={<Login />} />
      </Route>
    </Routes>
};

export default RouterConfig;