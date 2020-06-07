import React from 'react';
import logo from './logo.svg';
import avocado from './img/avocado.jpg';
import egg from './img/egg.jpg';
import apple from './img/apple.jpg';
import tomato from './img/tomato.jpg';
import pinapple from './img/pinapple.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Food List
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddItem food={'Avocado'} calories={100} image={<img src={avocado} alt='avocado' className='img' />}/>
        <AddItem food={'Egg'} calories={85} image={<img src={egg} alt='egg' className='img' />}/>
        <AddItem food={'Apple'} calories={95} image={<img src={apple} alt='apple' className='img' />}/>
        <AddItem food={'Tomato'} calories={65} image={<img src={tomato} alt='tomato' className='img' />}/>
        <AddItem food={'Pinapple'} calories={140} image={<img src={pinapple} alt='pinapple' className='img' />}/>
      </header>
    </div>
  );
}

function AddItem(props){
  const {food, calories, image} = props;
  return (
  <p>This is {food} with {calories} calories, image: {image}</p>
  )
}

export default App;
