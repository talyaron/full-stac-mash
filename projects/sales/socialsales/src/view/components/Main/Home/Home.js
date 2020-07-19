import React from 'react';
import './Home.scss';


//images

import Flyknit from '../../../../img/flyknit.jpg'
import Jordan from '../../../../img/jordan.jpg'
import Golfjacket from '../../../../img/golfjacket.jpg'
import Nikerepel from '../../../../img/nikerepel.jpg'

//compnents

import CardCurrentSale from '../../CardCurrentsale/CardCurrentsale';
import Card from '../../Card/Card';
import Header from '../../Header/Header';
import Button from '../../Button/Button';

function Home() {
  return (
    <div className="">
      <Header />
      <div className='cardsWrapper'>
        <Card image={Flyknit} title='Nike FE/NOM Flyknit' price='$140' discount='15% discount' comission='Comission $5.20' ttldiscount='$119 after discount' />

        <Card image={Jordan} title='Jordan Jacket' price='$150' discount='20% discount' comission='Comission $4.20' ttldiscount='$114 after discount' />

        <Card image={Golfjacket} title='Golf Jacket' price='$180' discount='30% discount' comission='Comission $4.50' ttldiscount='$116 after discount' />

        <CardCurrentSale image={Nikerepel} title='Nike Repel' earned='Earned so far $135' purchases='Number of purchases: 35'/>
      </div>
      <Button text='Add' />
      <Button text='Add to your sales' />


    </div>
  );
}

export default Home;
