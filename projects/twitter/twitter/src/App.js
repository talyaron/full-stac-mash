



import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

//components
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

export default function App() {

  const [user, setUser] = useState({img:'', name:''})

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <h2>{user.name}</h2>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home user={user}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Register user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

