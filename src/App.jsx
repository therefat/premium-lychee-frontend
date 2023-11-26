import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
