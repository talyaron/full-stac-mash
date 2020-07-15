import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header />

      <Card /> 
      
      <Card  />
      <Button text='Add'/>
      <Card  />
      <Button text='Add to your sales'/>
      

    </div>
  );
}

export default App;
