import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() { 
  const [productData,setProductData] = useState([])
    useEffect(() => {
      axios.get('items/allItems') 
      .then((response) => {
        // console.log(data) 
        setProductData(response.data)
      })
     .catch(error => {
      console.log(error)
     })
    },[] ) 
    console.log(productData)
  return (
    <div>Products

    <div className='grid grid-cols-4 gap-3'>
    {
        productData.map((item,index) => {
          return  <ProductCard key={index} item={item}/>
        } )
      }
    </div>
    </div>
  )
}

export default Products