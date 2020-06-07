import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Hello Masha, learn React</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddItem name={"masha"}/>
        <AddItem name={"lidia"}/>
        <AddItem name={"tal"}/>
      </header>
    </div>
  );
}

function AddItem(props){
  let {name} = props;
  return(
  <p>This is a new item name:{name}</p>
  )
}
  

export default App;
