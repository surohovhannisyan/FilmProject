import React, { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Component />;
  }
  return <Navigate to="/login" />;
};
export default PrivateRoute;
