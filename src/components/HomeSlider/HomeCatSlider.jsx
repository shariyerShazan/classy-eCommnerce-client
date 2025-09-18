import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Fashion", img: "/fashion.png" },
  { name: "Electronics", img: "/electronics.png" },
  { name: "Bags", img: "/bags.png" },
  { name: "Footwear", img: "/footwear.png" },
  { name: "Groceries", img: "/groceries.png" },
  { name: "Beauty", img: "/beauty.png" },
  { name: "Wellness", img: "/wellness.png" },
  { name: "Jewellery", img: "/jewellery.png" },
];

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider mt-12 mb-6'>
      <div className='container mx-auto'>
        <Swiper
          slidesPerView={8}
          spaceBetween={15}
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className='group py-5 cursor-pointer item p-3 bg-white rounded-lg shadow-md text-center flex flex-col items-center justify-center hover:shadow-xl transition'>
                <img src={cat?.img} alt={cat.name} className='w-22 h-22 object-cover mb-2 rounded-xl group-hover:scale-110 ' />
                <h2 className='text-sm font-semibold'>{cat.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCatSlider;
