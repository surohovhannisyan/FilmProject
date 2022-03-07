import React from 'react';
import axios from 'axios';

import { notification } from 'antd';
import { History, LocationState } from 'history';
import { ContextValueInterface } from '../Store/auth-context';

const signInURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRegmu6l6G00JTkDtLcmhD97rD2NBg2cU';

const signUpURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRegmu6l6G00JTkDtLcmhD97rD2NBg2cU';

export const signIn = async (
  username: string,
  pass: string,
  authCtx: ContextValueInterface,
  history: History<LocationState>
) => {
  try {
    const response = await axios.post(
      signInURL,
      { email: username, password: pass, returnSecureToken: true },
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

export const signUp = async (username: string, pass: string) => {
  try {
    const response = await axios.post(
      signUpURL,
      { email: username, password: pass, returnSecureToken: true },
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
