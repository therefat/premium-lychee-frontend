import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contex/UserContext';
import axios from 'axios';

function DashboardLayout({ children }) {


    const { userData,isLoggedIn } = useContext(UserContext);
    
    const navigate = useNavigate();
       
    let isLoaded = 0;
    
   
  return (
    <>
    <div className="grid grid-cols-6">

    <div className="col-span-2 p-6">
         <Link to={'/user/dashboard'} className={`mx-4 p-2 ${window.location.pathname === '/user/dashboard' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Dashboard</Link>
        {userData?.data?.role == 'admin' && <Link to={'/user/addproduct'} className={`mx-4 p-2 ${window.location.pathname === '/user/addproduct' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Add Product</Link> } 
        <Link to={'/user/productlist'} className={`mx-4 p-2 ${window.location.pathname === '/user/productlist' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>All Product</Link> 
        <Link to={'/user/orderlist'} className={`mx-4 p-2 ${window.location.pathname === '/user/orderlist' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Order List</Link> 
        
       
        <Link to={'/user/addressbook'} className={`mx-4 p-2 ${window.location.pathname === '/user/addressbook' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Address Book</Link>
    </div>

    <div className="col-span-4 p-6">
        {children}
    </div>


</div>
</>
  )
}

export default DashboardLayout