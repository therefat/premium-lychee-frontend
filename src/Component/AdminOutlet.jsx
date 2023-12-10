import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AdminOutlet() {
    const tokkes = localStorage.getItem('token')
    const tokenDecode = jwtDecode(tokkes)
    console.log(tokenDecode.data.role != 'admin')
    if(tokenDecode.data.role !='admin'){
      return <Navigate to={'/notfound'}></Navigate>
    }
  return <Outlet></Outlet>
    
  
}

export default AdminOutlet