import React from 'react';
import { Menu, Typography, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {
  HomeOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';

import { useAuth } from '../Hooks/useAuth';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  const history = useHistory();

  const logoutHandler = (): void => {
    logout();
    history.push('/login');
  };

  return (
    <Col>
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
          <Link to="/login" onClick={logoutHandler}>
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
