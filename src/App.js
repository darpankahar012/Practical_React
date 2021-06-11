import React, { Component, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import { suspenseFallbackLoader } from './components/Loader'

const Login = lazy(() => import("./components/Login"));
const Dashboard = lazy(() => import("./components/dashBoard"));
const AddCampaign = lazy(() => import("./components/AddCampaign"));
const GetBashPrice = lazy(() => import("./components/GetBashPrice"));

export class App extends Component {
  render() {
    let load = suspenseFallbackLoader()
    return (
      <div className="App">
        <Router>
          <Suspense fallback={load}>
            <Switch>
              <Route exact path="/" render={(props) => <Login {...props} />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
              <Route exact path="/add-campaign" render={(props) => <AddCampaign {...props} />} />
              <Route exact path="/get-bash-price" render={(props) => <GetBashPrice {...props} />} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}
export default App
