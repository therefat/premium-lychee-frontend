import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivetOtlet() {
    const tokkes = localStorage.getItem('user')
     
    console.log(tokkes)
 if (!tokkes) {
   return <Navigate to={'/login'} />;
 }
 return  <Outlet/> ;
}
export default PrivetOtlet