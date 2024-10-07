import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Navigate, Outlet } from 'react-router-dom';

function PrivetOulet() {
    const {isLoggedIn,userData,setIsLoggedIn} = useContext(UserContext);
   
    
    const token = JSON.parse(localStorage.getItem('user'))
    const role = token.role
    console.log(token?.token)
    if (token && (role=== 'user')) {
        return  <Outlet></Outlet> ;
      }
      return  <Navigate to={'/login'} />
      
}

export default PrivetOulet