import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { History, LocationState } from 'history';

import { ContextValueInterface } from '../Store/auth-context';
import { signInURL, signUpURL } from './login.constants';

interface ISignInCredentals {
  username: string;
  password: string;
  authCtx: ContextValueInterface;
  history: History<LocationState>;
}

export const signIn = async ({ username, password, authCtx, history }: ISignInCredentals) => {
  try {
    const response = await axios.post(
      signInURL,
      { email: username, password: password, returnSecureToken: true },
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
    notification.success({
      message: `Welcome  ${response.data.email}`,
      description: 'Successfully Signed in',
    });
    authCtx.login(response.data.idToken);
    history.push('/films');
  } catch (err) {
    notification.error({
      message: `Authentication failed`,
      description: 'Wrong Username or Password',
    });
  }
};

export const signUp = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      signUpURL,
      { email: username, password: password, returnSecureToken: true },
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
    notification.success({
      message: 'Successfully Signed Up ',
      description: 'Welcome to our project',
    });
  } catch (err) {
    notification.error({
      message: `Authentication failed`,
      description: 'Not valid E-mail or Password',
    });
  }
};
