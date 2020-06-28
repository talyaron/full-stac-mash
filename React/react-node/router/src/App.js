import React from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Home from './view/pages/Home/Home';
import About from './view/pages/About/About';
import Users from './view/pages/Users/Users';
import Games from './view/pages/Games/Games';
import Register from './view/pages/Register/Register';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/users/:userID">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <footer>This is our amazing app</footer>
      </div>
    </Router>
  );
}


