import React, { useContext } from 'react'
import { UserContext } from '../contex/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivetOulet() {
    const {isLoggedIn,userData,setIsLoggedIn} = useContext(UserContext)
  return userData ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>
}

export default PrivetOulet