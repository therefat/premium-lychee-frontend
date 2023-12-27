import React, { useEffect, useState } from 'react'
import Layout from '../../../layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function OrderSummery() {
     // Extract parameters from the URL
    const {id} = useParams() 
     // State variables to store order information and status
    const [orderInfo,setOrderInfo] = useState()
    const [status,setOrderStatus] = useState() 
     // Fetch order information using useEffect
    useEffect(() => {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token') 
           // Make a GET request to fetch order details
        axios.get('order/singleorder/'+ id,{
      headers : {
        Authorization : token
      }
    }) 
    .then((response) => {
        // Update state with the fetched order information
      setOrderInfo(response.data)
    
    }) 
    .catch((error) => {
      console.log(error)
    }) 
   
    },[])
   
     // Decode the user token to get user information
    const token = localStorage.getItem('token')
    const userInfo = jwtDecode(token)
    
    // Function to update the order status
    const updateStatus = (e) => {
        e.preventDefault();  
         // Make a PATCH request to update the order status
        axios.patch('order/orderStatus/' + id,{status},{
            headers : {
                Authorization : token
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
  return (
    <Layout>

<div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{orderInfo?._id}</h1>
                <p className="text-base font-medium leading-6 text-gray-600">{new Date(orderInfo?.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        {
                            orderInfo && orderInfo?.orderItems?.map(order => {
                                return (
                                    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={order.image} alt="dress" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{order.name}</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">
                                        {order.price} <span className="text-red-300 line-through"> $45.00</span>
                                    </p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{order?.quantity} pices</p>
                                    {/* <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p> */}
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                        {/* <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                            <div className="w-full md:w-40">
                                <img className="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                            </div>
                            <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">
                                        $20.00 <span className="text-red-300 line-through"> $30.00</span>
                                    </p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">SubTotal</p>
                                    <p className="text-base leading-4 text-gray-600">{orderInfo?.subTottal}</p>
                                </div>
                               
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">{orderInfo?.shippingCost}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">{orderInfo?.bill}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Payment Information:</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                   <h1>Payment Method :</h1>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">{orderInfo?.paymentInfo?.paymentMethod}</p>
                            </div>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                   <h1>Account No :</h1>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">{orderInfo?.paymentInfo?.accountNo}</p>
                            </div> 
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                   <h1>Transaction Id :</h1>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">{orderInfo?.paymentInfo?.transactionid}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{orderInfo?.user?.name}</p>
                                    {/* <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p> */}
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">{orderInfo?.user?.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Name : {orderInfo?.shippingDetails?.name}</p> 
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Phone : {orderInfo?.shippingDetails?.phone}</p> 
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Email : {orderInfo?.shippingDetails?.email}</p> 
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Address : {orderInfo?.shippingDetails?.address}</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Upzila : {orderInfo?.shippingDetails?.upzila}</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">City : {orderInfo?.shippingDetails?.city}</p> 
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Zip : {orderInfo?.shippingDetails?.zip}</p>
                                </div>
                                {/* <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
            <div className='admin'> 
             {/* Admin section to update order status */}
                        {
                            userInfo.data.role == 'admin' && <div> 
                                <form method='PATCH' onSubmit={(e) => updateStatus(e)} >
                                    <select value={status} onChange={(e) => setOrderStatus(e.target.value)} name="status">
                                        <option value={"Pending"}>Pending</option>
                                        <option value={"Approve"}>Approve</option>
                                        <option value="Processing">Processing</option> 
                                        <option value="Courier">Courier</option> 
                                        <option value="Shipped">Shipped</option> 
                                        <option value="Delivered">Delivered</option>
                                    </select> 
                                    <button>Update Status</button>
                                </form>
                                 </div>
                        }
            </div>
        </div>
    </Layout>
  )
}

export default OrderSummery