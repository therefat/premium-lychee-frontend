import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

function Layout({children}) {
  return (
    <> 
        <Navbar></Navbar>
        <div className='min-h-[75dvh] bg-neutral-100'>
          {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout