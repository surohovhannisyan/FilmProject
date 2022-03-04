import React, { useContext } from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

interface IProps extends RouteProps {
  path: string;
}

const PrivateRoute: React.FC<IProps> = ({ ...rest }) => {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;

  if (isLoggedIn == false) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
