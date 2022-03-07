import React from 'react';

import { useAuth } from '../Hooks/useAuth';
import { Menu, Typography, Col } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  const authCtx = useAuth();
  const isLoggedIn = authCtx.isLoggedIn;

  const history = useHistory();

  const logoutHandler = (): void => {
    authCtx.logout();
    history.push('/login');
  };

  return (
    <Col className="navbar-root">
      <Menu mode="horizontal">
        <Link to="/">
          <MenuItem icon={<HomeOutlined />}>
            <Text>Home</Text>
          </MenuItem>
        </Link>
        {isLoggedIn && (
          <Link to="/films">
            <MenuItem icon={<OrderedListOutlined />}>
              <Text>Films</Text>
            </MenuItem>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/login">
            <MenuItem icon={<LoginOutlined />}>
              <Text>Log in</Text>
            </MenuItem>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/" onClick={logoutHandler}>
            <MenuItem icon={<LogoutOutlined />}>
              <Text>Log out</Text>
            </MenuItem>
          </Link>
        )}
      </Menu>
    </Col>
  );
}

export default Navbar;
