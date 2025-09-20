import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import { LuMoveRight } from "react-icons/lu";
import { Navigation } from 'swiper/modules'
import ProducCard from '../ProducCard';
import Button from '@mui/material/Button';


const FeaturedProducts = () => {
  return (
    <div className='bg-white '> 
       <div className='container'>
              <div className='flex justify-between items-center'>
                 <h2 className='text-xl font-semibold text-gray-600'>FeaturedProducts</h2>
                 <Button className='!bg-white !border-primary hover:!bg-black hover:!border-black  !border-1 hover:!text-white !text-primary ' >
                   View All   <LuMoveRight />
                 </Button>
              </div>
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
    </div>
  )
}

export default FeaturedProducts
 
