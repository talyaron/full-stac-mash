import React from 'react';
import logo from './logo.svg';
import flower from './img/flower.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={flower} alt='flower' className='img' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
           Hi Masha, Learn React
        <DailyMenuItem name={'Avocado'} clalories={12}/>
        <DailyMenuItem name={'Tomato'} clalories={12}/>
        <DailyMenuItem name={'Olive oil'} clalories={12}/>
        <DailyMenuItem name={'Tuna'} clalories={12}/>
        <DailyMenuItem name={'Mac'} clalories={34}/>
        <DailyMenuItem name={'Salad'} clalories={345}/>
        <DailyMenuItem name={'Mionize'} clalories={34}/>
        <Food />
      </header>
    </div>
  );
}

// a component
function DailyMenuItem(props) {
  const {name, clalories} = props;

  return (
  <p>Hi, I am a daily menu item: {name}, and I have {clalories} calories <Edit name={name}/></p>
  )
}

function Edit(props){
  const {name} = props;

  return(<button onClick={()=>{alert(name)}}>ADD {name}</button>)
}

// another comnponent
function Food(){
  return(
    <div>
        <div>I am a food item</div>
        <div>And I have suce and such calories</div>
    </div>
  )
}



export default App;
