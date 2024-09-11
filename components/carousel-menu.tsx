'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <div className="w-full">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={4}
        className="mySwiper"
      >
        {items.map(({ label, href, to }, index) => {
          return (
            <SwiperSlide key={index} className="px-3 py-2">
              <Link
                href={to}
                className="flex flex-col gap-2 group cursor-pointer items-center justify-center w-full mb-12 rounded-md shadow-custom hover:-translate-y-4 duration-300 ease-in-out transform"
              >
                <div className="relative h-[12rem] rounded-t-md w-full overflow-hidden">
                  <Image src={href} alt={label} fill className="object-cover group-hover:scale-110 rounded-t-md duration-300 ease-in-out transform" />
                </div>
                <h5 className="font-semibold p-2 pb-3 text-lg line-clamp-2 text-center h-[5rem] flex justify-center items-center">{label}</h5>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
