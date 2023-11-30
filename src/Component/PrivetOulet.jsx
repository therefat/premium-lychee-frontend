import React, { useContext } from 'react'
import { UserContext } from '../contex/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivetOulet() {
    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext)
  return isLoggedIn ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>
}

export default PrivetOulet