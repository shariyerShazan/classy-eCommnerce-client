import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import FreeShipingBanner from '../../components/HomeSlider/Shipping/FreeShipingBanner'
import DiscountBanner from '../../components/HomeSlider/Shipping/DiscountBanner'
// import FooterTopForHome from '../../components/Footer/FooterTopForHome'
import LatestProduct from '../../components/HomeSlider/Products/HomePageViews/LatestProduct'
import FeaturedProducts from '../../components/HomeSlider/Products/HomePageViews/FeaturedProducts'
import JewelleryProducts from '../../components/HomeSlider/Products/HomePageViews/JewelleryProducts'
import WellnessPorducts from '../../components/HomeSlider/Products/HomePageViews/WellnessPorducts'
import BeautyProducts from '../../components/HomeSlider/Products/HomePageViews/BeautyProducts'
import GroceriesProducts from '../../components/HomeSlider/Products/HomePageViews/GroceriesProducts'
import FootwearProducts from '../../components/HomeSlider/Products/HomePageViews/FootwearProducts'
import BagsProducts from '../../components/HomeSlider/Products/HomePageViews/BagsProducts'


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

         
    </div>
  )
}

export default Home
