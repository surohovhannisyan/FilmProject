import React, { useContext } from 'react';

import { History, LocationState } from 'history';
import { notification } from 'antd';

import { ContextValueInterface } from '../Store/auth-context';

interface ISignState {
  title: string;
  titleTwo: string;
  btnValue: string;
  status: boolean;
}

export const signInUpHandler = (
  signInUpState: ISignState,
  username: string,
  pass: string,
  authCtx: ContextValueInterface,
  history: History<LocationState>
) => {
  if (signInUpState.status === false) {
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRegmu6l6G00JTkDtLcmhD97rD2NBg2cU',
      {
        method: 'POST',
        body: JSON.stringify({
          email: username,
          password: pass,
          returnSecueToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          await res.json();
          notification.error({
            message: 'Authentication Failed',
            description: 'Not valid E-mail or Password',
          });
        }
      })
      .then((data) => {
        notification.success({
          message: 'Successfully Signed Up ',
          description: 'Welcome to our project',
        });
      })
      .catch((err) => {
        notification.error({
          message: err.message,
          description: 'Something went wrong',
        });
      });
  } else {
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRegmu6l6G00JTkDtLcmhD97rD2NBg2cU',
      {
        method: 'POST',
        body: JSON.stringify({
          email: username,
          password: pass,
          returnSecueToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          await res.json();
          notification.error({
            message: 'Authentication Failed',
            description: 'Wrong Username or Password',
          });
        }
      })
      .then((data) => {
        notification.success({
          message: `Welcome  ${data.email}`,
          description: 'Successfully Signed in',
        });
        authCtx.login(data.idToken);
        history.push('/films');
      });
  }
};
