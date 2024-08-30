import React from 'react'
import Navbar from '../../components/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar/> 
        <div className='min-h-[75vh] mx-auto w-[90%] pb-5 bg-neutral-100'>
          {children}
        </div>
    </div>
  )
}

export default Layout