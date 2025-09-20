import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from 'swiper/modules'
import ProducCard from './ProducCard';

const ProductSlider = () => {
  return (
    <div>
       <Swiper 
       slidesPerView={6.2}
       spaceBetween={10} 
       navigation={true} 
       modules={[Navigation]}
       >
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((item)=>{
          return <SwiperSlide key={item}>
                    <ProducCard />
                </SwiperSlide>
        })}   
       </Swiper>
    </div>
  )
}

export default ProductSlider
