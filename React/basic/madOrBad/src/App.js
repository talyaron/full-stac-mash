import React, { useState } from 'react';
import './App.css';
import bomb from './img/bomb.png';
import explosion from './img/explosion.png';
import serious from './img/serious.jpg';
import laughing from './img/laughing.jpg';

//create 16 img
let imgs = []
for(let i=0;i<18;i++){
  let m = Math.random();
  if (m > 0.5){
  imgs.push(bomb)
  } else {imgs.push(serious)}
}






function App() {


  return (
    <div className="app">
      {
        imgs.map((img,index)=>{
          if(img == bomb){
          return(<Bomb key={index} img={img}/>)
          } else {
            return(<Serious key={index} img={img}/>)
          }
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

function Serious(props){
  const {img} = props;
  const [isSerious, setIsSerious] = useState(true);

  return(<img src={isSerious?img:laughing} onClick={()=>{ setIsSerious(!isSerious)}}/>)

}



export default App;
