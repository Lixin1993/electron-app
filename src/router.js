import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './pages/Login'
import Index from './pages/Index'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { initAxios } from './model'

export default function App() {

  useEffect(() => {
    initAxios()
  }, [])

  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}