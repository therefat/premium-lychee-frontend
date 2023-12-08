import React, { useContext } from 'react'
import { UserContext } from '../contex/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivetOulet() {
    const {isLoggedIn,userData,setIsLoggedIn} = useContext(UserContext)
     // Redirect to login if user is not logged in
     const tokkes = localStorage.getItem('token')
  if (!tokkes) {
    return <Navigate to={'/login'} />;
  }
  return  <Outlet></Outlet> 
}

export default PrivetOulet