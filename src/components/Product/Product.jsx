import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function Product() {
  const [products,setProducts] = useState();
  // useEffect(() => {
  //   axios.get('item/getproduct')
  //   .then((response) =>{
  //     console.log(response) 
  //    
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // })
  useEffect(() => {
    axios.get('item/getproduct')
    .then(response => {
      setProducts(response.data.products)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  console.log(products)
  return (
    <div>Product
      <div className='grid grid-cols-4 gap-3'>
    {
        products?.map((item,index) => {
          return  <ProductCard key={index} item={item}/>
        } )
      }
    </div>
    </div>
  )
}

export default Product