import React, { useState } from 'react';
import './App.css';



function App() {

  return (
    <div className="App">
       <div className='wrapper'>
       
        
       <SquareOne/>
       <SquareTwo/>
       <SquareThree/>
       <SquareFour/>


      
       
       
             
               
         </div>
      
    </div>
  );
}


function SquareOne(props) {
  const [square1, setSquare1] = useState('200px')
  

  return (
  
  <div className="SquareOne" style={{position: 'absolute', left: '200px', top:`${square1}`}}
   onClick={() => {

      if (square1 === '200px') {
        setSquare1('180px')
      } else {
        setSquare1('200px')
      }

    }} />
    )
}


function SquareTwo(props) {
  const [square2, setSquare2] = useState('300px')
  

  return (
  
  <div className="SquareTwo" style={{position: 'absolute', left: `${square2}`, top:'300px'}}
   onClick={() => {

      if (square2 === '300px') {
        setSquare2('320px')
      } else {
        setSquare2('300px')
      }

    }} />
    )
}
   
  
function SquareThree(props) {
  const [square3, setSquare3] = useState('400px')
  

  return (
  
  <div className="SquareThree" style={{position: 'absolute', left: '200px' , top:`${square3}`}}
   onClick={() => {

      if (square3 === '400px') {
        setSquare3('420px')
      } else {
        setSquare3('400px')
      }

    }} />
    )
}
   
function SquareFour(props) {
  const [square4, setSquare4] = useState('100px')
  

  return (
  
  <div className="SquareFour" style={{position: 'absolute', left: `${square4}` , top:'300px'}}
   onClick={() => {

      if (square4 === '100px') {
        setSquare4('80px')
      } else {
        setSquare4('100px')
      }

    }} />
    )
}

     


export default App;