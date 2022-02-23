import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Typography } from 'antd';

import AuthContext from '../Store/auth-context';

import './Login.scss';

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

  const userChangeHandler = (e) => {
    setUsernam(e.target.value);
  };
  const passChangeHandler = (e) => {
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
              const errorMessage = 'Authentication failed';
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.idToken);
          alert('Successfully signed up');
        })
        .catch((err) => {
          alert(err.message);
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
              const errorMessage = 'Authentication failed';
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.idToken);
          alert('Welcome ' + data.email);
          authCtx.login(data.idToken);
          console.log(authCtx);
          history('/films');
        })
        .catch((err) => {
          alert(err.message);
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
          <label>E-Mail</label> <br />
          <Input
            value={username}
            onChange={userChangeHandler}
            className="main-input-one"
            type="email"
          />
          <label>Password</label> <br />
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
        <Meta title={logReg.titleTwo} onClick={changeHandler} className="meta-two" />
      </Card>
    </div>
  );
}

export default Login;
