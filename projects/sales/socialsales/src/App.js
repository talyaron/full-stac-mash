import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Flyknit from './img/flyknit.jpg'
import Jordan from './img/jordan.jpg'
import Golfjacket from './img/golfjacket.jpg'
import Nikerepel from './img/nikerepel.jpg'
import Cardtwo from './components/Currentsale/Currentsale';

function App() {
  return (
    <div className="App">
      <Header />

      <Card image={Flyknit} title='Nike FE/NOM Flyknit' price='$140' discount='15% discount' comission='Comission $5.20' ttldiscount='$119 after discount'/> 
      
      <Card  image={Jordan} title='Jordan Jacket' price='$150'discount='20% discount' comission='Comission $4.20' ttldiscount='$114 after discount'/>
      
      <Card  image={Golfjacket} title='Golf Jacket'price='$180'discount='30% discount' comission='Comission $4.50' ttldiscount='$116 after discount'/>

      <Cardtwo image={Nikerepel} title='Nike Repel' earned='Earned so far $135' purchases='Number of purchases: 35'/>

      <Button text='Add'/>
      <Button text='Add to your sales'/>
      

    </div>
  );
}

export default App;
