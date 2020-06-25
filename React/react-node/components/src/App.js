import React, { useState, useEffect } from 'react';
import './App.css';

//components
import Rect from './view/components/Rect/Rect';




function App() {

  const [sum, setSum] = useState(2)
  const [text, setText] = useState("33");
  const [year, setYear] = useState(0)
  const [fullname, setFullname] = useState("my name");
  const [number, setNumber] = useState("1")
  const [number2, setNumber2] = useState("7")

  const result = parseInt(number) + parseInt(number2)

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

      fetch('/api/fullName')
      .then(response => response.json())
      .then(data => {
        setFullname(data.fullName)
      });

      fetch('/api/number')
      .then(response => response.json())
      .then(data => {
        setNumber(data.number)
      });

      fetch('/api/number2')
      .then(response => response.json())
      .then(data => {
        setNumber2(data.number2)
      });
  }, [])


  return (
    <div>
      <h1>{text}</h1>
      <h1>The Year is {year}</h1>
      <h2>Full Name is: {fullname}</h2>
      <h3 onClick={() => {setNumber(parseInt(number) + 4)}}> The number is: {number} </h3>
      <h3>Result is: {result}</h3>
      <Rect sum={sum} setSum={setSum} />
      <Rect sum={sum} setSum={setSum} />
      <Rect sum={sum} setSum={setSum} />
      <Rect sum={sum} setSum={setSum} />
      <Rect sum={sum} setSum={setSum} />
      <h1>Sum: {sum}</h1>
    </div>
  )

}


export default App;
