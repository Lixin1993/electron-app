import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { ipcRenderer } = window.electron || {};

const avatarMenu = (logout) => {
    return (
        <Menu>
          <Menu.Item key="0" onClick={logout}>
              退出登录
          </Menu.Item>
        </Menu>
      )
}

const Avatars = () => {
    let history = useHistory();
    const logout = () => {
        history.push('/login');
        setTimeout(() => ipcRenderer.send('logout'), 200);
    }
    return (
        <Dropdown overlay={() => avatarMenu(logout)} trigger={['click']}>
            <Avatar size={32} icon={<UserOutlined />} />
        </Dropdown>
    )
}

export default Avatars