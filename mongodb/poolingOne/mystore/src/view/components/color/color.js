import React, { useEffect, useState } from 'react';
import './color.css'



function Color(props) {
    const {product} = props;
    const [edit, setEdit] = useState(false);
    const [color, setColor] = useState(product.color);
  
    function updateHandler(e){
      if(e.key === 'Enter'){
        const newColor = e.target.value;
        console.log(newColor)
        setColor(newColor);
        setEdit(false);
  
        fetch('/api/update-color',{
          method:'PUT',
          body:JSON.stringify({product, newColor}),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      }
    }
  
    return (
      <div>
        {edit ?
          <input 
          type='text' 
          placeholder='set new color'
          onKeyUp={updateHandler}
          />
          :
          <span
            onClick={() => { setEdit(!edit) }}
          >Color: {color}</span>
        }
      </div>
    )
  }
  
  export default Color;