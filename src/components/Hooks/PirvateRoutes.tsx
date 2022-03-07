import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from './useAuth';

interface IProps extends RouteProps {
  path: string;
}

const PrivateRoute: React.FC<IProps> = ({ ...rest }) => {
  const isLoggedIn = useAuth().isLoggedIn;

  if (isLoggedIn == false) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
