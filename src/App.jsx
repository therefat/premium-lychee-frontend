import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import axios from 'axios'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'
import AdminLogin from './pages/Admin/AdminLogin'
import UserProvider, { UserContext } from './components/context/UserContext'
import PrivetOulet from './components/PrivetOulet'
import AdminOutlet from './components/context/AdminOutlet'
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard'
import AddProduct from './pages/Admin/Products/AddProduct'
import Category from './pages/Admin/Category/Category'
import AddCategory from './pages/Admin/Category/AddCategory'
import ProductList from './pages/Admin/Products/ProductList'
import UpdateProduct from './pages/Admin/Products/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  return (
   <UserProvider>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      {/* <Route exact path='/dashboard' element={<Dashboard/>}></Route> */}
      <Route exact path='/admin-login' element={<AdminLogin/>}></Route>
      <Route exact path='/*' element={<AdminOutlet></AdminOutlet>}>
        <Route exact path='admin/dashbord' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route exact path='admin/dashboard/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route exact path='admin/category' element={<Category/>}></Route>
        <Route exact path='admin/addcategory' element={<AddCategory></AddCategory>}></Route>
        <Route exact path='admin/productlist' element={<ProductList/>}></Route>
        <Route exact path='admin/product/:id' element={<UpdateProduct/>}></Route>
      </Route>
    </Routes>
   </UserProvider>
  )
}

export default App
