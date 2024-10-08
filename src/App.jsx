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
import ProductDetails from './pages/Product/ProductDetails'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'
import AddAddressBook from './pages/dashboard/AddAddressBook'
import AddressBook from './pages/dashboard/AddressBook'
import UpdateAddress from './pages/dashboard/UpdateAddress'
import CheckOut from './pages/dashboard/CheckOut'
import AllOrder from './pages/Admin/order/AllOrder'
import AllOrderUsers from './pages/user/Order/AllOrderUsers'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  return (
    <CartProvider>
   <UserProvider>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>

      <Route exact path='/lychee/:name/:id' element={<ProductDetails/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
      //user auth route
      <Route exact path='/*' element={<PrivetOulet/>}>
      <Route exact path='user/addressbook' element={<AddressBook/>}></Route>
      <Route exact path='user/addaddress' element={<AddAddressBook/>}></Route>
      <Route exact path='user/dashboard' element={<Dashboard/>}></Route>
      <Route exact path='user/updateaddress/:id' element={<UpdateAddress/>}></Route>
      <Route exact path='checkout' element={<CheckOut/>}></Route>
      <Route exact path='user/order/allorder' element={<AllOrderUsers/>}></Route>

      </Route>
      {/* <Route exact path='/dashboard' element={<Dashboard/>}></Route> */}
      <Route exact path='/admin-login' element={<AdminLogin/>}></Route>
      <Route exact path='/*' element={<AdminOutlet></AdminOutlet>}>
        <Route exact path='admin/dashbord' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route exact path='admin/dashboard/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route exact path='admin/category' element={<Category/>}></Route>
        <Route exact path='admin/addcategory' element={<AddCategory></AddCategory>}></Route>
        <Route exact path='admin/productlist' element={<ProductList/>}></Route>
        <Route exact path='admin/product/:id' element={<UpdateProduct/>}></Route>
        <Route exact path='admin/allorder' element={<AllOrder/>}></Route>
      </Route>
    </Routes>
   
   </UserProvider>
   </CartProvider>
  )
}

export default App
