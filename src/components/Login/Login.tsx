import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Typography, notification } from 'antd';

import AuthContext from '../Store/auth-context';

import './Login.scss';
import 'antd/dist/antd.css';

const { Text } = Typography;

function Login() {
  const [username, setUsernam] = useState('');
  const [pass, setPass] = useState('');
  const [logReg, setLogReg] = useState({
    title: 'Log-in',
    titleTwo: 'Register for first',
    btnValue: 'Log-in',
    status: true,
  });

  const authCtx = useContext(AuthContext);
  const history = useNavigate();

  const { Meta } = Card;

  const userChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernam(e.target.value);
  };
  const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };
  const submitHandler = () => {
    setUsernam('');
    setPass('');
    if (logReg.status === false) {
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
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then(() => {
              notification.open({
                message: 'Authentication Failed',
                description: 'Now valid E-mail or Password',
              });
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.idToken);
          notification.open({
            message: 'Successfully Signed Up ',
            description: 'Welcome to our project',
          });
        })
        .catch((err) => {
          notification.open({
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
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then(() => {
              notification.open({
                message: 'Authentication Failed',
                description: 'Wrong Username or Wrong Password',
              });
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.idToken);
          notification.open({
            message: 'Welcome ' + data.email,
            description: 'Successfully Signed in',
          });
          authCtx.login(data.idToken);
          console.log(authCtx);
          history('/films');
        })
        .catch((err) => {
          notification.open({
            message: err.message,
            description: 'Wrong Username or Wrong Password',
          });
        });
    }
  };
  const changeHandler = () => {
    setLogReg({
      ...logReg,
      title: 'Register',
      titleTwo: 'Already registeered? So log-in',
      btnValue: 'Register',
      status: false,
    });
    if (logReg.status == false) {
      setLogReg({
        title: 'Log-in',
        titleTwo: 'Register for first',
        btnValue: 'Log-in',
        status: true,
      });
    }
  };
  return (
    <div className="login-root">
      <Card className="login-card">
        <Meta title={logReg.title} />
        <Form>
          <label>E-Mail</label>
          <Input
            value={username}
            onChange={userChangeHandler}
            className="main-input-one"
            type="email"
          />
          <label>Password</label>
          <Input
            className="main-input-two"
            value={pass}
            onChange={passChangeHandler}
            type="password"
          />
        </Form>
        <Button className="log-btn" onClick={submitHandler}>
          <Text>{logReg.btnValue}</Text>
        </Button>
        <div onClick={changeHandler}>
          <Meta title={logReg.titleTwo} className="meta-two" />
        </div>
      </Card>
    </div>
  );
}

export default Login;
