import React, { useEffect, useState } from 'react';
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

  let url = window.location.href; // string
  let urlArr = url.split('/')
  //console.log(urlArr)
  let id = urlArr[urlArr.length-1];
  //console.log(id);

 const [cardsCurrentSales, setcardsCurrentSales] = useState([]);
 const [cardsHotSales, setcardsHotSales] = useState([]);

 
 useEffect(() => {
   fetch(`/api/get-user-cards/${id}`)
   .then(res => res.json())
   .then(cards => {
     console.log(cards)
      if (cards.success) {
        setcardsCurrentSales(cards.cardsCurrentSales);
        setcardsHotSales(cards.cardsHotSales);
      }
   })
 }, [])


 return (
   <div className="">
     <Header id={id} />

       <p>Hot Sales</p>
     
       <div  className='cardsWrapper'>
         {  
           cardsHotSales.map((card, index) => {
               return <h4 key={index}>  
                      <Button text='Add'  userId={id} index={index} cards={cardsHotSales} setCards={setcardsHotSales} otherCards={cardsCurrentSales} setOtherCards={setcardsCurrentSales}/> 
                      <Card card={card}/> </h4>
           })
         }
       </div>

       <p>My Current Sales</p>

       <div  className='cardsWrapper'>
         {   
           cardsCurrentSales.map((card, index) => {
               return <h4 key={index}>  
                      <Button text='Remove'  userId={id} index={index} cards={cardsCurrentSales} setCards={setcardsCurrentSales} otherCards={cardsHotSales} setOtherCards={setcardsHotSales}/>   
                      <CardCurrentSale card={card}/> </h4>
           })
         } 
       </div>
       
   </div>
 );
}

export default Home;