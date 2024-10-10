import React from 'react'
import { Link } from 'react-router-dom'

function DashboardLayout({children}) {
  return (
   <>
    <div className="grid grid-cols-6">

<div className="col-span-2 p-6">
     <Link to={'/user/dashboard'} className={`mx-4 p-2 ${window.location.pathname === '/user/dashboard' ? 'bg-red-600 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Dashboard</Link>
    
   <Link to={'/user/order/allorder'} className={`mx-4 p-2 ${window.location.pathname === '/user/order/allorder' ? 'bg-red-600 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Order List</Link> 

   
    <Link to={'/user/addressbook'} className={`mx-4 p-2 ${window.location.pathname === '/user/addressbook' ? 'bg-red-600 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Address Book</Link> 

  
    
</div>

<div className="col-span-4 p-6">
    {children}
</div>


</div>
   </>
  )
}

export default DashboardLayout