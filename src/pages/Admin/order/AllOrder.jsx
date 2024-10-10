import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout';
import DashboardLayout from '../../layout/DashboardLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminDashboard from '../Dashboard/AdminDashboard';
import AdminDashboardLayout from '../../layout/AdminDashboardLayout';

function AllOrder() {
    const token = JSON.parse(localStorage.getItem('user'));
    console.log(token.token);
    const [orderData,setOrderData] = useState()
    useEffect(() => {
      axios.get('order/allorder',{
        headers : {
          Authorization: `Bearer ${token?.token}`

        }
      })
      .then((res) => {
        setOrderData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },[])
    console.log(orderData)
  return (
    
        <AdminDashboardLayout>
        <h3 className="fw-bold text-xl">Order List</h3>

<div className="table-auto">
    <table className="w-full text-left text-gray-500 ConOrderTable">
        <thead className="text-lg text-gray-700">
            <tr className='bg-gray-100 py-4 ConHeaderOrder'>
                <th scope="col" className="p-3 ConMainHeaderTable">
                    Order Number
                </th>
                <th scope="col" className="px-6 ConMainHeaderTable">
                    Date
                </th>
                <th scope="col" className="px-6 ConMainHeaderTable">
                    Status
                </th>
                <th scope="col" className="px-6 ConMainHeaderTable">
                    Amount
                </th>
                <th scope="col" className="px-6 ConMainHeaderTable">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className='w-full'>
            {orderData && (
                orderData.length > 0 ? (
                    orderData.map((order, key) => {
                        return (
                            <tr key={key} className="w-full ConTableDesc mt-3" >
                                <td scope="row" dataTitle="Order number" className="px-6 py-4 font-medium text-gray-900 ConOrderTableTh">
                                    #{order.id}
                                </td>
                                <td dataTitle="Date" className="px-6 py-4 ConOrderTableTh">
                                    {new Date(order.created_at).toLocaleDateString()}
                                    {/* {order.order_date_time.slice(0, 10)} <br/>
                                    {order.order_date_time.slice(12, 19)} */}
                                </td>
                                <td dataTitle="Status" className="px-6 py-4 ConOrderTableTh">
                                    {order.status}
                                    {/* {order.status.charAt(0).toUpperCase() + order.status.slice(1)} */}
                                    {/* {order.status.charAt(0).toUpperCase() + order.status.slice(1)} */}
                                </td>
                                <td dataTitle="Amount" className="px-6 py-4 font-bold ConOrderTableTh">
                                    {order.bill} Tk
                                </td>
                                <td className=" text-center"><Link to={`/order/ordersummerys/${order.id}`} className="bg-blue-600 rounded-lg py-2 px-4 text-white hover:bg-blue-800">View</Link> </td>
                            </tr>
                        )
                    }
                    )
                ) : (
                    <tr className='text-center'><td colspan="100%"><h2 className='text-2xl font-bold text-amber-500 mt-3'>No Orders Found!</h2></td></tr>
                )
            )}

        </tbody>
    </table>
</div>
        </AdminDashboardLayout>

  )
}

export default AllOrder