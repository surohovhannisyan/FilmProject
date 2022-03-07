import React, { useContext } from 'react';
import AuthContext from '../Store/auth-context';

export const useAuth = () => {
  return useContext(AuthContext);
};
