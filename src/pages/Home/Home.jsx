import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import FreeShipingBanner from '../../components/Shipping/FreeShipingBanner'
import DiscountBanner from '../../components/Shipping/DiscountBanner'


const Home = () => {
  return (
    <div className='bg-secondary'>
        <HomeSlider />
         <FreeShipingBanner />
         <DiscountBanner />
    </div>
  )
}

export default Home
