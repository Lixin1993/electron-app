import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './pages/login'
import Index from './pages/index'

export default function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
        </Switch>
    </Router>
  );
}