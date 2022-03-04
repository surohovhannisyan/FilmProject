import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Card, Form, Input, Button, Typography, Col } from 'antd';

import AuthContext from '../Store/auth-context';
import { signInUpHandler } from './LoginApiCall';

import './Login.scss';
import 'antd/dist/antd.css';

const { Text } = Typography;
const { Meta } = Card;

function Login() {
  const [username, setUsernam] = useState('');
  const [pass, setPass] = useState('');
  const [signInUpState, setSignInUpState] = useState({
    title: 'Log-in',
    titleTwo: 'Register for first',
    btnValue: 'Log-in',
    status: true,
  });

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const userChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernam(e.target.value);
  };

  const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const submitHandler = () => {
    setUsernam('');
    setPass('');
    signInUpHandler(signInUpState, username, pass, authCtx, history);
  };

  const changeHandler = () => {
    setSignInUpState({
      ...signInUpState,
      title: 'Register',
      titleTwo: 'Already registeered? So log-in',
      btnValue: 'Register',
      status: false,
    });
    if (signInUpState.status == false) {
      setSignInUpState({
        title: 'Log-in',
        titleTwo: 'Register for first',
        btnValue: 'Log-in',
        status: true,
      });
    }
  };

  return (
    <Col className="login-root">
      <Card className="login-card">
        <Meta title={signInUpState.title} />
        <Form>
          <Text className="mailLabel">E-Mail</Text>
          <Input
            value={username}
            onChange={userChangeHandler}
            className="main-input-one"
            type="email"
          />
          <Text className="passLabel">Password</Text>
          <Input
            className="main-input-two"
            value={pass}
            onChange={passChangeHandler}
            type="password"
          />
        </Form>
        <Button className="log-btn" onClick={submitHandler}>
          <Text>{signInUpState.btnValue}</Text>
        </Button>
        <Col onClick={changeHandler}>
          <Meta title={signInUpState.titleTwo} className="meta-two" />
        </Col>
      </Card>
    </Col>
  );
}

export default Login;
