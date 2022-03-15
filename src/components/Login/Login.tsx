import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography, Col } from 'antd';

import { signIn, signUp } from './loginApiCall';
import { useAuth } from '../Hooks/useAuth';

import 'antd/dist/antd.css';
import styles from './Login.module.scss';

const { Title, Text } = Typography;

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
    title: 'Sign-in',
    titleTwo: 'Sign-up for first',
    btnValue: 'Sign-in',
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
      title: 'Sign Up',
      titleTwo: 'Already signed-up? So sign-in',
      btnValue: 'Sign-up',
      isRegistered: false,
    });
    if (isRegistered == false) {
      setLoginCardElements({
        title: 'Sign In',
        titleTwo: 'Sign-up for first',
        btnValue: 'Sign-in',
        isRegistered: true,
      });
    }
  };

  return (
    <Col className={styles['login-card']}>
      <Title level={4}>{title}</Title>
      <Form>
        <Text strong className={styles.label}>
          E-Mail
        </Text>
        <Input value={username} onChange={userChangeHandler} type="email" />
        <Text strong className={styles.label}>
          Password
        </Text>
        <Input value={password} onChange={passChangeHandler} type="password" minLength={8} />
        <Button onClick={submitHandler}>{btnValue}</Button>
        <Text underline>
          <a onClick={changeHandler}>{titleTwo}</a>
        </Text>
      </Form>
    </Col>
  );
};

export default Login;
