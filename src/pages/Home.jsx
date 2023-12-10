import React from 'react'
import Layout from '../layout/Layout'
import slider1 from '../assets/images/sliderImage/slider1.png'
import slider2 from '../assets/images/sliderImage/slider2.png'
import slider3 from '../assets/images/sliderImage/slider3.jpg'
import Slider from 'react-slick'
import Dashboard from './dashboard/Dashboard'
import Products from '../Component/Products'

function Home() {
  const sliderSettings = {
    dots : true,
    infinite : true,
    speed: 500,
    autoplay: true,
    slidesToShow : 1,
    slidesToScroll : 1
  }
  return (

    <Layout>
       <div className="sliders">
       <Slider {...sliderSettings}>
            <div className=' '>
              <img src={slider1}  className="h-[300px] w-[100%] "  alt="" />
            </div>
            <div className=''>
            <img src={slider2} alt="" className='h-[300px] w-[100%]' />
            </div>
            <div className=''>
            <img className='h-[300px] w-[100%]' src={slider3} alt="" />
            </div>
        </Slider>

       </div>
       {/* <Dashboard/> */} 
       <Products/>
    </Layout>
  )
}

export default Home