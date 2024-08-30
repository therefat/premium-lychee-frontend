import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import axios from 'axios'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App
