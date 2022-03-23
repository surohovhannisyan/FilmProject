import React, { useContext } from 'react';
import AuthContext from '../store/storeAuth/auth-context';

export const useAuth = () => {
  return useContext(AuthContext);
};
