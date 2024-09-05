import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Navigate, Outlet } from 'react-router-dom';

function PrivetOulet() {
    const {isLoggedIn,userData,setIsLoggedIn} = useContext(UserContext);
   
    
    const tokkes = localStorage.getItem('user')
    if (!tokkes) {
        return <Navigate to={'/login'} />;
      }
      return  <Outlet></Outlet> 
      
}

export default PrivetOulet