import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "./banner-1.jpg",
  "./banner-2.jpg",
  "./banner-3.jpg",
  "./banner-4.jpg",
];

export default function HomeSlider() {
  return (
    <div className="w-full">
      <div className="relative mx-auto slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          className="custom-swiper"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i} className="custom-slide">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-[420px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-swiper-prev custom-swiper-nav">
          <MdKeyboardArrowLeft size={28} />
        </button>
        <button className="custom-swiper-next custom-swiper-nav">
          <MdKeyboardArrowRight size={28} />
        </button>
      </div>
    </div>
  );
}
