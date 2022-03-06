import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute(props) {
  const logado = true
  if(logado){
    return <Route {...props} />
  }

  return <Route element={<Navigate to="/" />} />
}

export default PrivateRoute;
