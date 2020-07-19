import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route 
  
} from "react-router-dom";


//compnents
import Home from './view/components/Main/Home/Home';
import Start from './view/Pages/Start/Start';
import Register from './view/Pages/Register/Register';


function App() {
  return (
    <Router>
    <div>
     
     
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
       
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
