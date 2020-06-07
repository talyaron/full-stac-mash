import React, { useState } from 'react';
import './App.css';




function App() {

  const [todos, setTodos] = useState([
    { name: 'buy milk' }
  ])

  return (
    <div className="App">
      {
        todos.map((todo, index) => {
          return (<Item todos={todos} setTodos={setTodos} key={index} name={todo.name} index={index}/>)
        })
      }

      <input type='text' placeholder='add task' onKeyUp={(e) => {
        console.log(e.target.value, e.key)
        if (e.key == 'Enter') {

          // todos.push({name:e.target.value})
          setTodos([...todos, { name: e.target.value }])

          e.target.value = '';
        }
      }} />
    </div>
  );
}

function Item(props) {
  const { name, todos, setTodos, index } = props

  return (<div onClick={()=>{
    console.log(index)
    let tempTodo = [...todos];
    tempTodo.splice(index,1)
    
    setTodos(tempTodo);
  }}>{name}</div>)
}

export default App;
