import React from 'react';
import logo from './logo.svg';
import lipstick from './img/lipstick.jpg';
import foundation from './img/foundation.jpg';
import eyeshadow from './img/eyeshadow.jpg';
import eyeliner from './img/eyeliner.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Makeup Store!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyProduct productType={'Lipstick'} price={30} image={<img src={lipstick} alt='lipstick' className='img'/>}/>
        <MyProduct productType={'Foundation'} price={40} image={<img src={foundation} alt='foundation' className='img'/>}/>
        <MyProduct productType={'Eyeshadow'} price={45} image={<img src={eyeshadow} alt='eyeshadow' className='img'/>}/>
        <MyProduct productType={'Eyeliner'} price={20} image={<img src={eyeliner} alt='eyeliner' className='img'/>}/>

      </header>
    </div>
  );
}
function MyProduct(props){
  const {productType, price, image} = props;
  return(
  <p>{image} Product: {productType},  Price: {price}</p>
  )
}

export default App;
