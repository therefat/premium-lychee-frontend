import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../contex/CartContext'

function ProductCard(props) {
    const  {item} = props 
    const [carload,setCartload] = useState(false) 
    const {updateCartData} = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
      if(carload){
        setCartload(false)
      }
    },[carload])
    const addToCart = () => { 
        // console.log('test')
        const token = localStorage.getItem("token");
        if(token){
            axios.post('cart/addcart',{
            itemId : item._id,
            quantity: 50
          },{headers: {
            Authorization: token,
            
          },})
          .then((response) => {
            
          updateCartData(null)
          
          })
          .catch((err) =>{
            console.log(err)
          })
        } else {
          navigate('/login')
        }
        setCartload(true) 
    }
  return (
    <div className="bg-base-100 rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
    <div className="relative">
        <Link  to={'/lychee/' + item.name}>
        <img className="w-full h-[250px]" src={item.image} alt="Product Image"/>
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div> 
        </Link>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{item.name}</h3>
        <div>
        <p className="font-bold mb-1 text-center text-lg">&#2547; {item.price}</p>
        </div>
        <div className="flex items-center justify-between">
            {/*  */} 
            <button onClick={() => addToCart(item)} className="btn btn-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
            <Link  to={'/lychee/' + item.name} className="btn btn-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </Link>
        </div>
    </div>
</div>
  )
}

export default ProductCard