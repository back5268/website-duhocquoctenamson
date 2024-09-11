"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

export const Carousel = () => {
  return (
    <div className="h-[36rem] w-full relative">
      <div className="absolute z-10 top-[50%] translate-y-[-50%] cursor-pointer pointer-events-none hover:bg-white"></div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative h-[36rem] bg-slate-500">
                <Image
                  src={item}
                  alt="Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
