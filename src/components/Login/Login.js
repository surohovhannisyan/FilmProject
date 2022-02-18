import React, { useState } from 'react';

import { Card, Form, Input, Button, Typography } from 'antd';

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

  const { Meta } = Card;

  const userChangeHandler = (e) => {
    setUsernam(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };
  const submitHandler = () => {
    console.log(username, pass);
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
        <br />
        <Form>
          <label>E-Mail</label> <br />
          <Input
            value={username}
            onChange={userChangeHandler}
            className="main-input-one"
            type="email"
          />{' '}
          <br />
          <br />
          <labell>Password</labell> <br />
          <Input
            className="main-input-two"
            value={pass}
            onChange={passChangeHandler}
            type="password"
          />
        </Form>
        <br />
        <Button className="log-btn" onClick={submitHandler}>
          <Text>{logReg.btnValue}</Text>
        </Button>
        <br />
        <br />
        <Meta title={logReg.titleTwo} onClick={changeHandler} className="meta-2" />
      </Card>
    </div>
  );
}

export default Login;
