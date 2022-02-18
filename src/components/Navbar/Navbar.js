import React from 'react';
import { useContext } from 'react';
import { Menu, Typography } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import AuthContext from '../Store/auth-context';

import './Navbar.scss';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className="navbar-root">
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
          <Link to="/login">
            <MenuItem icon={<LogoutOutlined />} onClick={logoutHandler}>
              <Text>Log out</Text>
            </MenuItem>
          </Link>
        )}
      </Menu>
    </div>
  );
}

export default Navbar;
