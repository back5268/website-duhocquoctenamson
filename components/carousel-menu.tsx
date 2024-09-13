'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ItemProp = {
  href: string;
  label: string;
  to: string;
};

type CarouselMenuProps = {
  items: ItemProp[];
};

export const CarouselMenu = ({ items }: CarouselMenuProps) => {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full px-16 lg:px-0">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          400: {
            slidesPerView: 1
          },
          800: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1600: {
            slidesPerView: 4
          }
        }}
        className="mySwiper"
      >
        {items.map(({ label, href, to }, index) => {
          return (
            <SwiperSlide key={index} className="px-3 pt-4 lg:pb-0 pb-4">
              <Link
                href={to}
                className="flex flex-col gap-2 group cursor-pointer items-center justify-center w-full mb-12 rounded-md shadow-custom hover:-translate-y-4 duration-300 ease-in-out transform"
              >
                <div className="relative h-[16rem] lg:h-[12rem] rounded-t-md w-full overflow-hidden">
                  <Image src={href} alt={label} fill className="object-cover group-hover:scale-110 rounded-t-md duration-300 ease-in-out transform" />
                </div>
                <h5 className="font-semibold p-2 pb-3 text-lg line-clamp-2 text-center h-[5rem] flex justify-center items-center">{label}</h5>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
