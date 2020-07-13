
import React, { useEffect, useState } from 'react';
import './eyeshadows.css'

import Color from '../../components/color/color';
import Price from '../../components/price/price';

export default function Eyeshadows() {
    const [products, setProducts] = useState([]);
    // const [edit, setEdit] = useState(false)
  
    useEffect(() => {
      fetch('/api/get-all-eyeshadow')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })
    }, [])
    return (<div className='eyeshadows'>
        <h1>Eyeshadows</h1>
        {
                  products.map((product, index) => {
                    return <h3 key={index}>{product.name}: <Color product={product} /><Price product={product}/></h3>
                  })
                }
    </div>)
}

