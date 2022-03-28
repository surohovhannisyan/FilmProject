import React from 'react';
import { Menu, Typography, Col } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';

import { useAuth } from '../../hooks/useAuth';

import styles from './Navbar.module.scss';

const { Text } = Typography;

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  const history = useHistory();

  const logoutHandler = (): void => {
    logout();
    history.push('/login');
  };

  return (
    <Col className={styles['menu-root']}>
      <Menu mode="horizontal" theme="dark" className={styles.menumain} selectedKeys={['']}>
        <Menu.Item key="home" icon={<HomeOutlined />} className={styles.home}>
          <Link to="/">
            <Text className={styles.menuitemtext}>Home</Text>
          </Link>
        </Menu.Item>
        {isLoggedIn && (
          <Menu.Item key="movies" icon={<OrderedListOutlined />} className={styles.movies}>
            <Link to="/movies">
              <Text className={styles.menuitemtext}>Movies</Text>
            </Link>
          </Menu.Item>
        )}
        {!isLoggedIn && (
          <Menu.Item key="login" icon={<LoginOutlined />} className={styles.login}>
            <Link to="/login">
              <Text className={styles.menuitemtext}>Log in</Text>
            </Link>
          </Menu.Item>
        )}
        {isLoggedIn && (
          <Menu.Item key="logout" icon={<LogoutOutlined />} className={styles.logout}>
            <Link to="/login" onClick={logoutHandler}>
              <Text className={styles.menuitemtext}>Log out</Text>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Col>
  );
}

export default Navbar;
