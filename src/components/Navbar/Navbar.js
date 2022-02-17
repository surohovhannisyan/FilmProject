import React from 'react';
import { Menu, Typography } from 'antd';
import { HomeOutlined, OrderedListOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const { Text } = Typography;

function Navbar() {
  return (
    <div className="navbar-root">
      <Menu mode="horizontal">
        <Link to="/">
          <MenuItem icon={<HomeOutlined />}>
            <Text>Home</Text>
          </MenuItem>
        </Link>
        <Link to="/films">
          <MenuItem icon={<OrderedListOutlined />}>
            {' '}
            <Text>Films</Text>
          </MenuItem>
        </Link>
        <Link to="/login">
          <MenuItem icon={<LoginOutlined />}>
            {' '}
            <Text>Login</Text>{' '}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
