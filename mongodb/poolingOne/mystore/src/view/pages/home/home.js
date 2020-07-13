import React, { useEffect, useState } from 'react';
import './home.css'

import Color from '../../components/color/color';
import Price from '../../components/price/price';
import Addproduct from '../../components/addproduct/addproduct';

export default function Home() {
    
        const [products, setProducts] = useState([]);
     // const [edit, setEdit] = useState(false)
   
     useEffect(() => {
       fetch('/api/get-all-products')
       .then(res => res.json())
       .then(data => {
         console.log(data)
         setProducts(data);
       })
     }, [])
   

//   }, [])
    return (<div className='home'>
        <h1>Makeup Store</h1>
        {
                  products.map((product, index) => {
                    return <h3 key={index}>{product.name}:<Color product={product} /><Price product={product}/>   </h3>
                  })
                }
                <Addproduct/>


    </div>)
}

