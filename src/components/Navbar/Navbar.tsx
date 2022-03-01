import React from 'react';
import { Menu, Typography } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Link, Navigate } from 'react-router-dom';
import PrivateRoutes from '../Hooks/PirvateRoutes';
import AuthContext from '../Store/auth-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const logoutHandler = (): void => {
    authCtx.logout();
    history('/login');
  };
  return (
    <div className="navbar-root">
      <Menu mode="horizontal">
        <Link to="/">
          <MenuItem icon={<HomeOutlined />}>
            <Text>Home</Text>
          </MenuItem>
        </Link>
        {authCtx.isLoggedIn && (
          <Link to="/films">
            <MenuItem icon={<OrderedListOutlined />}>
              <Text>Films</Text>
            </MenuItem>
          </Link>
        )}
        {!authCtx.isLoggedIn && (
          <Link to="/login">
            <MenuItem icon={<LoginOutlined />}>
              <Text>Log in</Text>
            </MenuItem>
          </Link>
        )}
        {authCtx.isLoggedIn && (
          <Link to="/" onClick={logoutHandler}>
            <MenuItem icon={<LogoutOutlined />}>
              <Text>Log out</Text>
            </MenuItem>
          </Link>
        )}
      </Menu>
    </div>
  );
}

export default Navbar;
