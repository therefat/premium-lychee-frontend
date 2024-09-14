import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboardLayout({children}) {
  return (
    <>
    
      <div className="grid grid-cols-6">

<div className="col-span-2 p-6">
     <Link to={'/user/dashboard'} className={`mx-4 p-2 ${window.location.pathname === '/user/dashboard' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Dashboard</Link>
    
    <Link to={'/user/productlist'} className={`mx-4 p-2 ${window.location.pathname === '/user/productlist' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>All Product</Link> 
    <Link to={'/admin/category'} className={`mx-4 p-2 ${window.location.pathname === '/admin/category' ? 'bg-red-700 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Category</Link> 

   
    <Link to={'/user/addressbook'} className={`mx-4 p-2 ${window.location.pathname === '/user/addressbook' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Address Book</Link> 

    <Link to={'/admin/dashboard/addProduct'} className={`mx-4 p-2 ${window.location.pathname === '/user/addproduct' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Add Product</Link>  
    <Link to={'/user/order/allorder'} className={`mx-4 p-2 ${window.location.pathname === '/user/order/allorder' ? 'bg-primary text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>All Order</Link>
    
</div>

<div className="col-span-4 p-6">
    {children}
</div>


</div>
    </>
  )
}

export default AdminDashboardLayout