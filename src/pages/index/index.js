import React from 'react'
import { Layout, Menu, Breadcrumb, Avatar } from 'antd'
import {  UserOutlined } from '@ant-design/icons'
import config from '../../route/siderBarConfig'
import './index.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const siderBar = () => {
    return config.map(item => <Menu.Item key={item.title} icon={item.icon}>{item.name}</Menu.Item>)
}

class SiderDemo extends React.Component {
  render() {
    return (
      <Layout className='wrapper' style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo">
              成外生物组卷系统
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {siderBar()}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 16px', textAlign: 'right' }}>
            <Avatar size={32} icon={<UserOutlined />} />
            </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@成都外国语学校生物组</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo