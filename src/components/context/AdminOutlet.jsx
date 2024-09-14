import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AdminOutlet() {
    const admin = JSON.parse(localStorage.getItem('user'))
    const role = admin?.role_id == '1'

    if (!role) {
        return <Navigate to={'/login'} />;
      }
      return  <Outlet></Outlet> 
}

export default AdminOutlet