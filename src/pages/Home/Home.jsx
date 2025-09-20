import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import FreeShipingBanner from '../../components/Shipping/FreeShipingBanner'
import DiscountBanner from '../../components/Shipping/DiscountBanner'
import FooterTopForHome from '../../components/Footer/FooterTopForHome'
import LatestProduct from '../../components/Products/HomePageViews/LatestProduct'
import FeaturedProducts from '../../components/Products/HomePageViews/FeaturedProducts'
import JewelleryProducts from '../../components/Products/HomePageViews/JewelleryProducts'
import WellnessPorducts from '../../components/Products/HomePageViews/WellnessPorducts'
import BeautyProducts from '../../components/Products/HomePageViews/BeautyProducts'
import GroceriesProducts from '../../components/Products/HomePageViews/GroceriesProducts'
import FootwearProducts from '../../components/Products/HomePageViews/FootwearProducts'
import BagsProducts from '../../components/Products/HomePageViews/BagsProducts'


const Home = () => {
  return (
    <div className='bg-secondary'>
        <HomeSlider />
         <FreeShipingBanner />
         {/* latest and fetureds */}
         <LatestProduct />
         <FeaturedProducts />

         <DiscountBanner />

          {/* others */}
          <JewelleryProducts />
          <WellnessPorducts />
          <BeautyProducts />
          <GroceriesProducts />
          <FootwearProducts />
          <BagsProducts />

         <FooterTopForHome />
    </div>
  )
}

export default Home
