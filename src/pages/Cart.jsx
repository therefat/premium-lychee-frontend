import React, { useContext, useEffect } from 'react'
import Layout from '../layout/Layout' 
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Cart() { 
    const {cartData,setCartData,updateCartData } = useContext(CartContext) 
    useEffect(() =>{
   
      
    },[]) 
    const  removeItem = (itemId) => {
      const token = localStorage.getItem('token') 
      console.log(token)
      axios.delete(`cart/deletcart?itemId=${itemId}`,{
          headers : {
              Authorization : token
          }
      }
          
      ) 
      .then(ress => {
          console.log(ress)
          updateCartData(null)
      }) 
      .catch(errr => {
          console.log(errr)
      })
    }
    
  return (
    <Layout>
        <div className='container mx-auto mt-5'>
        {
          cartData && cartData ? (
            <>
            <table className=" min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-base-300">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Title
                  </th>
                  
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Subtotal
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase "
                  >
                    Action 
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-red-700 uppercase dark:text-red-500"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {cartData?.items &&
                  cartData?.items.map((item, index) => {
                    console.log(item)
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={item.image} width={80} height={80} />
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.name}
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.price}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.quantity } 
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.quantity * item.price}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-between items-center w-[6rem]">
                                <button className={`text-2xl p-2 w-8 rounded-lg ${item.quantity==1 ? 'bg-slate-100 text-red-600' : 'bg-slate-500 text-white'}`} onClick={()=>updateItemQuantity(item.id, (item.quantity-1))} 
                                disabled={item.quantity==1}>
                                    -
                                </button>
                                {item.quantity}
                                <button className="bg-slate-500 text-2xl text-white p-2 w-8 rounded-lg" onClick={()=>updateItemQuantity(item.id, (item.quantity+1))}>
                                    +
                                </button>
                            </div>
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <button className="bg-red-500 text-black p-2" onClick={()=>{removeItem(item.itemId); }}>
                                Delete
                            </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className='grid mt-5 items-center'><Link to={'/checkout'} className=" w-48 p-4 bg-primary text-white rounded-lg hover:bg-slate-500">Checkout</Link></div>
            </>
          ) :  (<>
            <h1>Card Is Empty</h1>
          </>)
        }
        </div>


    </Layout>
  )
}

export default Cart