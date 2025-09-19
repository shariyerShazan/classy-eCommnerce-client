import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import FreeShiping from '../../components/Shipping/FreeShiping'

const Home = () => {
  return (
    <div className='bg-secondary'>
        <HomeSlider />
         <FreeShiping />
    </div>
  )
}

export default Home
