import React, { useState, useEffect } from 'react';
import './App.css';




function App() {

  const [sum, setSum] = useState(2)
  const [text, setText] = useState("33");
  const [yearR, setYear] = useState(0)

  useEffect(() => {
    fetch('/api/hi')
      .then(response => response.json())
      .then(data => {

        setText(data.text)
      });

    fetch('/api/date')
      .then(response => response.json())
      .then(data => {
        const {year} = data; 
        console.log(data)
        setYear(year)
      });
  }, [])

  return (
    <div>
      <h1>{text}</h1>
      <h1>The Year is {yearR}</h1>
      <Rect sum={sum} setSum={setSum} />
      <Rect sum={sum} setSum={setSum} />
      <h1>Sum: {sum}</h1>
    </div>
  )

}

function Rect(props) {

  const [counter, setCounter] = useState(1)

  return (
    <div className='rect' onClick={() => {
      setCounter(counter + 1);
      props.setSum(props.sum + 1)
    }}>Hi: {counter}</div>
  );
}

export default App;
