import React, { useState } from 'react';
import './App.css';
import bomb from './img/bomb.png';
import explosion from './img/explosion.png';

//create 16 img
let imgs = []
for(let i=0;i<16;i++){
  imgs.push(bomb)
}



function App() {


  return (
    <div className="app">
      {
        imgs.map((img,index)=>{
          return(<Bomb key={index} img={img}/>)
        })
      }
    </div>


  );
}

function Bomb(props){
  const {img} = props;
  const [isBomb, setIsBomb] = useState(true);


  return(<img src={isBomb?img:explosion} onClick={()=>{ setIsBomb(!isBomb)}}/>)
}



export default App;
