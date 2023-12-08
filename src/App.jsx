import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import UserProvider, { UserContext } from './contex/UserContext'
import PrivetOulet from './Component/PrivetOulet'
import axios from 'axios'
import Product from './pages/Product/Product'
import Dashboard from './pages/dashboard/Dashboard'
import AddProduct from './pages/dashboard/AddProduct'

function App() {
  const [count, setCount] = useState(0)
 
  axios.defaults.baseURL="http://localhost:8080/"
  return (
    <>
     <UserProvider>
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        
        <Route path='/*' element={<PrivetOulet></PrivetOulet>}>
          <Route path='product' element={<Product/>}></Route>
          <Route path='user/dashboard' element={<Dashboard/>}></Route> 
          <Route path='user/addproduct' element={<AddProduct></AddProduct>}></Route>
          {/* <Route path='dashboard' element={<Dashboard/>}></Route> */}
         
        </Route>
     </Routes>


     </UserProvider>
     
    </>
  )
}

export default App
