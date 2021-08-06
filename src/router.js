import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}