import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProvider, { UserContext } from "./contex/UserContext";
import PrivetOulet from "./Component/PrivetOulet";
import axios from "axios";
import Product from "./pages/Product/Product";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/dashboard/AddProduct";
import AdminOutlet from "./Component/AdminOutlet";
import NotFound from "./pages/NotFound";
import ProductBuy from "./pages/Product/ProductBuy";
import ProductList from "./pages/dashboard/ProductList";
import UpdateProduct from "./pages/Product/UpdateProduct";
import CartProvider from "./contex/CartContext";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import AddAddress from "./pages/dashboard/AddAddress";
import NewAdd from "./pages/dashboard/NewAdd";
import AddressBook from "./pages/dashboard/AddressBook";
import EditAddress from "./pages/dashboard/EditAddress";
import OrderList from "./pages/dashboard/order/OrderList";
import OrderProvider from "./contex/OrderContext";
import OrderSummery from "./pages/dashboard/order/OrderSummery";
import AllOrder from "./pages/dashboard/order/AllOrder";

function App() {
  const [count, setCount] = useState(0);

  axios.defaults.baseURL = "http://localhost:8080/";
  return (
    <>
      <UserProvider> 
        <CartProvider> 
        <OrderProvider>
        <Routes>
        <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/user/updateaddress/:id" element={<EditAddress/>}></Route>
          <Route path="/*" element={<PrivetOulet></PrivetOulet>}>
            <Route path="product" element={<Product />}></Route>
            <Route path="user/dashboard" element={<Dashboard />}></Route> 
            <Route path="user/addaddress" element={<AddAddress></AddAddress>}></Route>
            <Route path="user/addressbook" element={<AddressBook/>}></Route>
            <Route path="user/orderlist" element={<OrderList/>}></Route> 
            <Route path="order/ordersummery/:id" element={<OrderSummery/>}></Route>
            
            <Route path="item/:id" element={<UpdateProduct/>}></Route>
            <Route path="user/*" element={<AdminOutlet />}>
          
              <Route path="addproduct" element={<AddProduct />} /> 
              <Route path="order/allorder" element={<AllOrder/>}></Route>
              <Route path="productlist" element={<ProductList/>}> </Route>
              
            </Route>
            <Route path="notfound" element={<NotFound />} />
           
          </Route> 
          <Route path="/lychee/:name" element={<ProductBuy/>}></Route> 
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/cart" element={<Cart/>}> </Route> 
          <Route path="/addaddress" element={<AddAddress></AddAddress>}></Route>
          
        </Routes> 
        </OrderProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
