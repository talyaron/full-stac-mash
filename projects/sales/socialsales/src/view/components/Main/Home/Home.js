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

 const [cards, setCards] = useState([]);
 const [move, setMove] = useState([]);

 
 let userCards = [];
 const promises = [];

 useEffect(() => {
   fetch(`/api/get-user-cards/${id}`)
   .then(res => res.json())
   .then(cards => {
     console.log(cards)
    //  if (false) {
    //    data.cards.map((x) => {
    //      promises.push(
    //        fetch(`/api/get-card-by-id/${x}`)
    //        .then(res => res.json())
    //        .then(c => {
    //          userCards.push(c)
    //        })
    //      )
    //      Promise.all(promises).then(() => { 
    //        console.log(userCards); 
    //        setCards(userCards); 
    //        setMove(userCards.map(x => x.type)) 
    //      })
    //    })
    //  } else {
    //    setCards([])
    //  }
   })
 }, [])
 

 /*
 useEffect(() => {
   fetch('/api/get-all-cards')
   .then(res => res.json())
   .then(data => {
     console.log(data)
     setCards(data);
     setMove(data.map(x => x.type))
   })
 }, [])
 */


 return (
   <div className="">
     <Header id={id}/>

       <p>Hot Sales</p>
     
       <div  className='cardsWrapper'>
         {  
           cards.map((card, index) => {
             if (move[index] == "regular") {  // "move"  state is not updated in DB
               return <h4 key={index}>  <Button text='Add' index={index} move={move} setMove={setMove}/> <Card card={card}/> </h4>
             }
           })
         }
       </div>

       <p>My Current Sales</p>

       <div  className='cardsWrapper'>
         {   
           cards.map((card, index) => {
               if (move[index] == "currentsale") { 
               return <h4 key={index}> <Button text='Remove'  index={index} move={move} setMove={setMove}/> <CardCurrentSale card={card}/> </h4>
               } 
           })
         } 
       </div>
       
   </div>
 );
}

export default Home;
