import React from 'react'
import { Layout, Menu } from 'antd'
import config from '../../route/siderBarConfig'
import { Switch, Route, Link } from 'react-router-dom'
import Avatar from '../../components/avatar'

import './index.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const siderBar = () => {
    return config.map((item) => {
        if (item.children) {
            return (
                <SubMenu key={item.title} icon={item.icon} title={item.name}>
                    {item.children.map(child =><Menu.Item key={child.tilte}><Link to={child.path}>{child.name}</Link></Menu.Item>)}
                </SubMenu>
            )
        }
        return <Menu.Item key={item.title} icon={item.icon}><Link to={item.path}>{item.name}</Link></Menu.Item>
    })
}

const routerComp = () => {
  return config.map(item => {
        if (item.children) {
            return item.children.map(child => <Route key={child.title} path={child.path} component={child.component} />)
        }
        return <Route key={item.title} path={item.path} component={item.component} />
      })
}

const SiderDemo = () => {
  
  return (
    <Layout className='wrapper' style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo">
            成外生物组卷系统
        </div>
        <Menu theme="dark" defaultSelectedKeys={['paper']} mode="inline">
          {siderBar()}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: '0 16px', background: '#f0f2f5', textAlign: 'right' }}>
          <Avatar />
        </Header>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                  {routerComp()}
              </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@成都外国语学校生物组</Footer>
      </Layout>
    </Layout>
  );
}

export default SiderDemo