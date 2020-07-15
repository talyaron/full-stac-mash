import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import ButtonLG from './components/ButtonLG/ButtonLG';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header />

      <Card /> 
      <ButtonLG />
      <Card  />
      <Button />
      <Card  />
      <Button />
      

    </div>
  );
}

export default App;
