import React from 'react'
import Layout from '../layout/Layout'
import Slider from 'react-slick'

function Home() {
  const sliderSettings = {
    dots : true,
    infinite : true,
    speed: 500,
    slidesToShow : 1,
    slidesToScroll : 1
  }
  return (

    <Layout>
       <div className="sliders">
       <Slider {...sliderSettings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
        </Slider>
       </div>
    </Layout>
  )
}

export default Home