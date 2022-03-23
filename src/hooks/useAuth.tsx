import React, { useContext } from 'react';
import AuthContext from '../store/Store Auth/auth-context';

export const useAuth = () => {
  return useContext(AuthContext);
};
