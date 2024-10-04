import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';

function ProductCard({item}) {
    const { addItem } = useCart();
   
  return (
    <div className="bg-[#87CEEB] rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
    <div className="relative">
        <Link  to={`lychee/${item.name}/${item.id}`}>
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
            <button onClick={() => {
                console.log(item)
                addItem(item,100)
            }} className="btn btn-primary bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
            <Link  to={`lychee/${item.name}/${item.id}`} className="btn btn-primary bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </Link>
        </div>
    </div>
</div>

  )
}

export default ProductCard