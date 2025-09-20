import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import FreeShipingBanner from '../../components/Shipping/FreeShipingBanner'
import DiscountBanner from '../../components/Shipping/DiscountBanner'
import FooterTopForHome from '../../components/Footer/FooterTopForHome'
import LatestProduct from '../../components/Products/HomePageViews/LatestProduct'
import FeaturedProducts from '../../components/Products/HomePageViews/FeaturedProducts'


const Home = () => {
  return (
    <div className='bg-secondary'>
        <HomeSlider />
         <FreeShipingBanner />
         <LatestProduct />
         <FeaturedProducts />
         <DiscountBanner />
         <FooterTopForHome />
    </div>
  )
}

export default Home
