import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     {/* <img src="./assetes/logo/logoss.png" alt="" />  */}
     {/* <img src="/media/refat/Document1/dev/projects/premium lychee/premium-lychee-frontend/src/assets/logo/logoss.png" alt="" /> */}
      
    </>
  )
}

export default App
