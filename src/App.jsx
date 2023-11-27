import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
