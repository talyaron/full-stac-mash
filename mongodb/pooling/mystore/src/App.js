import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    fetch('/api/get-all-lipstick')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          products.map((product, index) => {
            return <h3 key={index}>{product.name}: <Color product={product} /></h3>
          })
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function Color(props) {
  const {product} = props;
  const [edit, setEdit] = useState(false);
  const [color, setColor] = useState(product.color);

  function updateHandler(e){
    if(e.key === 'Enter'){
      const newColor = e.target.value;
      console.log(newColor)
      setColor(newColor);
      setEdit(false);

      fetch('/api/update-color',{
        method:'PUT',
        body:JSON.stringify({product, newColor}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }
  }

  return (
    <div>
      {edit ?
        <input 
        type='text' 
        placeholder='set new color'
        onKeyUp={updateHandler}
        />
        :
        <span
          onClick={() => { setEdit(!edit) }}
        >{color}</span>
      }
    </div>
  )
}
