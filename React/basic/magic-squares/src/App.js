import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
/*
let squares = [
{squareId: 1, name:'Square 1'},
{squareId: 2, name:'Square 2'},{squareId: 3, name:'Square 3'},
{squareId: 4, name:'Square 4'},{squareId: 5, name:'Square 5'},
{squareId: 6, name:'Square 6'},{squareId: 7, name:'Square 7'},
{squareId: 8, name:'Square 8'},{squareId: 9, name:'Square 9'},
{squareId: 10, name:'Square 10'},
{squareId: 11, name:'Square 11'},{squareId: 12, name:'Square 12'},
{squareId: 13, name:'Square 13'},{squareId: 14, name:'Square 14'},
{squareId: 15, name:'Square 15'},{squareId: 16, name:'Square 16'},
{squareId: 17, name:'Square 17'},{squareId: 18, name:'Square 18'},
{squareId: 19, name:'Square 19'},{squareId: 20, name:'Square 20'},
{squareId: 21, name:'Square 21'},
{squareId: 22, name:'Square 22'},{squareId: 23, name:'Square 23'},
{squareId: 24, name:'Square 24'},{squareId: 25, name:'Square 25'},
{squareId: 26, name:'Square 26'},{squareId: 27, name:'Square 27'},
{squareId: 28, name:'Square 28'},{squareId: 29, name:'Square 29'},
{squareId: 30, name:'Square 30'},
{squareId: 31, name:'Square 31'},{squareId: 32, name:'Square 32'},
{squareId: 33, name:'Square 33'},{squareId: 34, name:'Square 34'},
{squareId: 35, name:'Square 35'},{squareId: 36, name:'Square 36'},
{squareId: 37, name:'Square 37'},{squareId: 38, name:'Square 38'},
{squareId: 39, name:'Square 39'},{squareId: 40, name:'Square 40'}

 ]
 */

let squares = [];
for (let i = 0; i < 40; i++) {

  //create random color
  let color = getRandomColor();

  let j = i + 1;
  squares.push({ squareId: j, name: `Square ${j}`, color });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My Squares
        </h1>
      </header>
      <div className='container'>
        {
          squares.map((square, index) => {
            return (<MySquares key={index} squareId={square.squareId} name={square.name} color={square.color} />)
          })
        }
      </div>


    </div>
  )
};

function MySquares(props) {
  const { name, color } = props;
  const [colorState, setColorState] = useState(color)
  
  return (

    <div className="wrapper">
      <div className="mySquare" style={{ background: `${colorState}` }}>
        <p>{name}</p>
        <input type='text' placeholder='color' onKeyUp={(e)=>setColorState(e.target.value)}></input>
      </div>

    </div>



  )

}

export default App;
