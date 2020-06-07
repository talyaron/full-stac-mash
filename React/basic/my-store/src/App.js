import React, { useState } from 'react';
import lipstick from './img/lipstick.jpg';
import foundation from './img/foundation.jpg';
import eyeshadow from './img/eyeshadow.jpg';
import eyeliner from './img/eyeliner.jpg';
import './App.css';


let products = [
  { productType: 'Lipstick', price: 23, img: lipstick, alt: 'lipstick' },
  { productType: 'Foundation', price: 40, img: foundation, alt: 'foundation' },
  { productType: 'Eyeshadow', price: 45, img: eyeshadow, alt: 'eyeshadow' },
  { productType: 'Eyeliner', price: 20, img: eyeliner, alt: 'eyeliner' }


]

let names = ['Masha', "Lidia", "Tal"]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Welcome to my Makeup Store!
        </p>
        {
          products.map((product, index) => {

            return (<MyProduct key={index} productType={product.productType} price={product.price} image={product.img} alt={product.alt} className='img' />)
          })
        }
        {
          names.map((name, index) => {
            return (<div key={index}>{name}</div>)
          })
        }

      </header>
    </div>
  );
}
function MyProduct(props) {


  const { productType, price, image, alt } = props;
  const [price1, setPrice] = useState(price);
  //useState get initial value (price)
  //it sets the state (which is a variable)
  //It also set the setter

  let price2 = price;

  return (
    <p><img src={image} alt={alt} /> Product: {productType}, <span onClick={() => {
      setPrice(price1 + 1);
      price2++;
      console.log(price1, price2)
    }}
    > Price: {price1}, {price2} </span></p>
  )
}

export default App;
