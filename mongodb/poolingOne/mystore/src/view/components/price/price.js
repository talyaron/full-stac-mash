import React, { useEffect, useState } from 'react';
import './price.css'

function Price (props) {
    const {product} = props;
    const [edit, setEdit] = useState(false);
    const [price, setPrice] = useState(product.price);
  
    function updateHandler(e){
      if(e.key === 'Enter'){
        const newPrice = e.target.value;
        console.log(newPrice)
        setPrice(newPrice);
        setEdit(false);
  
        fetch('/api/update-price',{
          method:'PUT',
          body:JSON.stringify({product, newPrice}),
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
          placeholder='set new price'
          onKeyUp={updateHandler}
          />
          :
          <span
            onClick={() => { setEdit(!edit) }}
          >Price: {price}</span>
        }
      </div>
    )
  }
  

  export default Price;