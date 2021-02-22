import React, { useEffect, useState } from 'react';
import './addproduct.css'

import Color from '../../components/color/color';
import Price from '../../components/price/price';

function Addproduct(props) {

    const [products, setNew] = useState([])

function submitProduct(e){
    e.preventDefault();
    
        let { price, type, name, color } = e.target.elements;
        let priceVal = price.value;
        let typeVal = type.value;
        let nameVal = name.value;
        let colorVal = color.value;
       
        console.log(nameVal)
    
    let newProd = { 'type': typeVal, 'name': nameVal, 'color': colorVal, 'price': priceVal }

    

        fetch('/api/add-product', {
            method: 'POST',
            body: JSON.stringify({ newProd }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
            setNew([...products, newProd])


    e.target.elements.price.value = '';
    e.target.elements.type.value = '';
    e.target.elements.name.value = '';
    e.target.elements.color.value = '';

}



    return (
        <div className='add-product'>
            

            { /* add new products  */
              products.map((product, index) => {
                return <h3 key={index}>{product.name}:<Color product={product} /><Price product={product}/>   </h3>
              })
            }
           <h3>Add Product</h3>

            <form className='addproduct form' onSubmit={(e)=>submitProduct(e)} >
                <input type='price' placeholder='price' name='price' />
                <input type='type' placeholder='type' name='type' />
                <input type='name' placeholder='name' name='name' />
                <input type='name' placeholder='color' name= 'color' />
                <input type='submit' value='Add Product' />
            </form>
        </div>

    )

}




  
  export default Addproduct;