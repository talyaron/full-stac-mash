import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
           Hi Masha, Learn React
        <DailyMenuItem />
        <DailyMenuItem />
        <DailyMenuItem />
        <DailyMenuItem />
        <DailyMenuItem />
        <DailyMenuItem />
        <DailyMenuItem />
        <Food />
      </header>
    </div>
  );
}

// a component
function DailyMenuItem() {
  return (
    <p>Hi, I am a daily menu item</p>
  )
}

// another comnponent
function Food(){
  return(
    <div>
        <div>I am a food item</div>
        <div>And I have suce and such calories</div>
    </div>
  )
}



export default App;
