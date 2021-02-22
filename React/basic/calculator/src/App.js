import React, { useState } from 'react';
import './App.css';


function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  let number3 = parseInt(number1) + parseInt(number2);
  // const [ number3, setNumber3] = useState(0)

  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);

  let number6 = parseInt(number4) - parseInt(number5);

  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);

  let number9 = parseInt(number7) * parseInt(number8);

  const [number10, setNumber10] = useState(0);
  const [number11, setNumber11] = useState(1);

  let number12 = parseInt(number10) / parseInt(number11);



  return (

    <div className="app">
      <h3>Calculator</h3>
      <div className="calc">

        <InputOne setNumber1={setNumber1} /> <span>+</span>

        <InputTwo setNumber2={setNumber2} /> <span>=</span>

        <span>{number3}</span>
        <br></br>




        <InputThree setNumber4={setNumber4} /> <span>-</span>

        <InputFour setNumber5={setNumber5} /> <span>=</span>

        <span>{number6}</span>
        <br></br>

        <InputFive setNumber7={setNumber7} /> <span>*</span>

        <InputSix setNumber8={setNumber8} /> <span>=</span>

        <span>{number9}</span>
        <br></br>

        <InputSeven setNumber10={setNumber10} /> <span>/</span>

        <InputEight setNumber11={setNumber11} /> <span>=</span>

        <span>{number12}</span>
        <br></br>
      </div>


    </div>

  );
}

function InputOne(props) {
  const { setNumber1 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber1(e.target.value);

    }} />
  )
}


function InputTwo(props) {
  const { setNumber2 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber2(e.target.value);

    }} />
  )
}



function InputThree(props) {
  const { setNumber4 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber4(e.target.value);

    }} />
  )
}



function InputFour(props) {
  const { setNumber5 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber5(e.target.value);

    }} />
  )
}

function InputFive(props) {
  const { setNumber7 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber7(e.target.value);

    }} />
  )
}


function InputSix(props) {
  const { setNumber8 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber8(e.target.value);

    }} />
  )
}

function InputSeven(props) {
  const { setNumber10 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber10(e.target.value);

    }} />
  )
}

function InputEight(props) {
  const { setNumber11 } = props;
  return (
    <input type='text' onKeyUp={(e) => {

      setNumber11(e.target.value);

    }} />
  )
}

export default App;