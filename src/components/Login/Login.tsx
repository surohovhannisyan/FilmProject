import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography, Col } from 'antd';

import { signIn, signUp } from './loginApiCall';
import { useAuth } from '../Hooks/useAuth';

import 'antd/dist/antd.css';
import styles from './Login.module.scss';

const { Title } = Typography;

interface ILoginCardElements {
  title: string;
  titleTwo: string;
  btnValue: string;
  isRegistered: boolean;
}

const Login = () => {
  const [username, setUsernam] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginCardElements, setLoginCardElements] = useState<ILoginCardElements>({
    title: 'Log-in',
    titleTwo: 'Register for first',
    btnValue: 'Log-in',
    isRegistered: true,
  });
  const { title, titleTwo, btnValue, isRegistered } = loginCardElements;
  const authCtx = useAuth();
  const history = useHistory();

  const userChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernam(e.target.value);
  };

  const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    setUsernam('');
    setPassword('');
    if (isRegistered === false) {
      signUp(username, password);
    } else {
      signIn({ username, password, authCtx, history });
    }
  };

  const changeHandler = () => {
    setLoginCardElements({
      ...loginCardElements,
      title: 'Register',
      titleTwo: 'Already registeered? So log-in',
      btnValue: 'Register',
      isRegistered: false,
    });
    if (isRegistered == false) {
      setLoginCardElements({
        title: 'Log-in',
        titleTwo: 'Register for first',
        btnValue: 'Log-in',
        isRegistered: true,
      });
    }
  };

  return (
    <Col className={styles.loginCard}>
      <Title level={4}>{title}</Title>
      <Form>
        <Title level={5}>E-Mail</Title>
        <Form.Item label="Username" name="username">
          <Input value={username} onChange={userChangeHandler} type="email" />
        </Form.Item>
        <Title level={5}>Password</Title>
        <Input value={password} onChange={passChangeHandler} type="password" minLength={8} />
        <Button onClick={submitHandler}>
          <Title level={5}>{btnValue}</Title>
        </Button>
        <Title onClick={changeHandler} level={5}>
          <a>{titleTwo}</a>
        </Title>
      </Form>
    </Col>
  );
};

export default Login;
