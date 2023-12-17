import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const OrderContext = createContext('')
const OrderProvider = ({children}) => {
    const token = localStorage.getItem('token')
    const [orderData,setOrderData] = useState() 
    useEffect(() => {
       if(token && !orderData){
        axios.get('order/corder',{headers: {
            Authorization: token,
            
          },}) 
          .then((response) => {
            setOrderData(response.data)
            // let datas = response.data.items.length
            //  setCarts(response)
            })
            .catch((err) =>{
              console.log(err)
            })
       }
    },[orderData])  
    const updateOrderData = newData => {
        setOrderData(newData);
      };
      return <OrderContext.Provider value={{orderData,setOrderData,updateOrderData}}>
        {children}
      </OrderContext.Provider>
} 
export default OrderProvider