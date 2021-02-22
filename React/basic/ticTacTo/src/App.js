import React, { useState } from 'react';
import './App.css';

//create 36 squares and each of them should be x or o
const squares = [];

for (let i = 0; i < 36; i++) {

  //create somthing which will return x or o
  let m = Math.random() //0 <-> 1;
  let vl = 'x'
  if (m > 0.5) {
    vl = 'o'
  }

  squares.push(vl)
}

console.log(squares)


function App() {


  return (
    <div className="app">
      {
        squares.map((val2, index) => {
          return (<Square key={index} val={val2} />)
        })
      }
    </div>


  );
}

function Square(props) {
  const { val } = props;
  
  const [ vl, setVl ] = useState(val);
 

  return (
    <div className='square' onClick={()=>{if(vl==='x'){ setVl('o')} else {setVl('x')}}}>
      <div>{vl}</div>
    </div>
  )
}

export default App;
