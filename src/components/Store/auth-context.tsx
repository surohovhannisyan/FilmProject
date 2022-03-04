import React, { ReactChild, useState } from 'react';

export interface ContextValueInterface {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProps {
  children: ReactChild;
}

const AuthContext = React.createContext<ContextValueInterface>({
  token: '',
  isLoggedIn: false,
  login: (token) => {
    /**/
  },
  logout: () => {
    /**/
  },
});

export const AuthContextProvider = (props: AuthProps) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
