import React, { useState } from 'react';
import './App.css';
import bomb from './img/bomb.png';
import explosion from './img/explosion.png';
import serious from './img/serious.jpg';
import laughing from './img/laughing.jpg';

//create 16 img
let imgs = []
for (let i = 0; i < 18; i++) {
  let m = Math.random();

  if (m > 0.5) {
    imgs.push({ fs1: bomb, fs2: explosion })
  }
  else { imgs.push({ fs1: serious, fs2: laughing }) }
}



//lifting state up;


function App() {

  const [counter, setCounter] = useState(1)
  const [text, setText] = useState('Start writing');
  const [messages, setMessages] = useState([])

  return (
    <div className="app">
      <h2>Counter: {counter}</h2>
      <h3>{text}</h3>

      <Input text={text} setText={setText} handleChange={handleChange} />

      {
        messages.map((message, index)=>{
          return(<p key={index}>{message}</p>)
        })
      }
      <div className='chatWtrapper'>

      </div>
      <div className='wrapper'>
        {
          imgs.map((coupleImgs, index) => {

            return (<Img key={index} imgs={coupleImgs} counter={counter} setCounter={setCounter} />)

          })
        }



      </div>
    </div>


  );

  function handleChange(e) {
    console.log(e.key)
    console.log(e.target.value);
    if (e.key === 'Enter') {
      console.log('Enter was pressed')
      setMessages([...messages,e.target.value ])
      
      e.target.value = '';
    }
  }
}

function Input(props) {
  const { text, setText, handleChange } = props;
  return (
    <input type='text' placeholder='your text' defaultValue={text} onKeyUp={handleChange} />
  )
}



function Img(props) {
  const { fs1, fs2 } = props.imgs;
  const { counter, setCounter } = props;
  const [whichFase, setWhichFase] = useState('fs1');

  return (<img
    src={whichFase === 'fs1' ? fs1 : fs2}
    onClick={() => {
      setCounter(counter + 1);
      if (whichFase === 'fs1') {
        setWhichFase('fs2')
      } else {
        setWhichFase('fs1')
      }

    }} />)
}





export default App;
