import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "./banner-card-1.jpg",
    title: "Buy New Treand Women Black Cotton Blend Top | Top For Women",
    subTitle: "Start At only ",
    price: 1500,
    subtitle: "Discover the latest trends",
  },
  {
    img: "./banner-card-2.jpg",
    title: "Apple 17 Pro | 128 GB Pink",
    subTitle: "Start At only ",
    price: 1200,
    subtitle: "Up to 50% Off",
  },
];

// parent variant (controls stagger timing)
const parentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
};

// child variant (each text line)
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SecondSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = ["./dis-ban-1.webp", "./dis-ban-2.webp"];

  return (
    <div className="container pt-5 pb-12">
      <div className="flex gap-4">
        {/* Left (70%) */}
        <div className="w-[70%]">
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-lg overflow-hidden h-[420px]"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="relative">
                <img
                  src={slide.img}
                  alt={`slide-${i}`}
                  className="w-full h-[420px] object-cover"
                />

                {/* Animated text - only for active slide */}
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      key={slide.title}
                      variants={parentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-1/3 right-10 text-right text-black"
                    >
                      <motion.p
                        variants={childVariants}
                        className="text-lg text-gray-700"
                      >
                        Big Saving Days Sale
                      </motion.p>

                      <motion.h2
                        variants={childVariants}
                        className="text-3xl w-[500px] font-bold mb-2 drop-shadow-lg"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        variants={childVariants}
                        className="text-xl text-black"
                      >
                        {slide.subTitle}{" "}
                        <span className="text-3xl text-primary">
                          ${slide.price}
                        </span>
                      </motion.p>

                      <motion.p
                        variants={childVariants}
                        className="mb-4 drop-shadow"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div variants={childVariants}>
                        <Button
                          variant="contained"
                          color="primary"
                          className="!bg-primary hover:!bg-black"
                        >
                          Shop Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right (30%) */}
        <div className="w-[30%] flex flex-col gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-lg h-[200px]"
            >
              <img
                src={img}
                alt={`discount-${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-107"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
