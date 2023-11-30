import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { UserContext } from './contex/UserContext'
import PrivetOulet from './Component/PrivetOulet'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn,setIsLoggedIn] = useState()

  return (
    <>
     <UserContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        
        <Route path='/*' element={<PrivetOulet></PrivetOulet>}>

        </Route>
     </Routes>


     </UserContext.Provider>
     
    </>
  )
}

export default App
