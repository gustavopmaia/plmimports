import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { history } from '../history';
import PrivateRoute from './PrivateRoute'

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function MyRoutes() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <PrivateRoute path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
