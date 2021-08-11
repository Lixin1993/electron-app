import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './pages/Login'
import Index from './pages/Index'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

export default function App() {
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