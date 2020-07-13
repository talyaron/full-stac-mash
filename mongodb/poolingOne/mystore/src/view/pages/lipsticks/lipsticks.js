
import React, { useEffect, useState } from 'react';
import './lipsticks.css'

import Color from '../../components/color/color';
import Price from '../../components/price/price';

export default function Lipsticks() {
    const [products, setProducts] = useState([]);
    // const [edit, setEdit] = useState(false)
  
    useEffect(() => {
      fetch('/api/get-all-lipstick')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })
    }, [])
    return (<div className='lipsticks'>
        <h1>Lipsticks</h1>
        {
                  products.map((product, index) => {
                    return <h3 key={index}>{product.name}: <Color product={product} /><Price product={product}/></h3>
                  })
                }
    </div>)
}

