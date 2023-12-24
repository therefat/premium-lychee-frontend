import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext('') 
const CartProvider = ({children}) => { 
    const token = localStorage.getItem('token')
    const [cartData,setCartData] = useState() 
    useEffect(() => {
       if(token && !cartData){
        axios.get('cart/getcart',{headers: {
            Authorization: token,
            
          },}) 
          .then((response) => {
            setCartData(response.data)
            // let datas = response.data.items.length
            //  setCarts(response)
            })
            .catch((err) =>{
              console.log(err)
            })
       }
    },[cartData]) 
    const updateCartData = newData => {
      
      setCartData(newData);
    };
   
    return <CartContext.Provider value={{cartData,setCartData,updateCartData}}> 
            {children}
         </CartContext.Provider>
} 
export default CartProvider