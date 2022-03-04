import React, { useContext } from 'react';

import { Menu, Typography } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../Store/auth-context';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  const authCtx = useContext(AuthContext);
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
