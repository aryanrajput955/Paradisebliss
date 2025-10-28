'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function InternationalSlider() {
  const banners = [
    {
      id: 1,
      alt: 'Bali Banner',
      image: '/optimised/Bali_Banner.webp'
    },
    {
      id: 2,
      alt: 'Dubai Banner',
      image: '/optimised/Dubai_Banner (1).png'
    },
    {
      id: 3,
      alt: 'Georgia Banner',
      image: '/optimised/Georgia_Banner.webp'
    },
    {
      id: 4,
      alt: 'Thailand Banner',
      image: '/optimised/Thailand_Banner.webp'
    },
    {
      id: 5,
      alt: 'Vietnam Banner',
      image: '/optimised/Vietnam_Banner.png'
    }
  ];

  return (
    <div className="relative w-full py-8 px-4">
      <style jsx global>{`
        .international-slider .swiper-pagination {
          position: relative;
          margin-top: 0;
        }
        .international-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }
        .international-slider .swiper-pagination-bullet-active {
          width: 40px;
          border-radius: 6px;
          background: #2563eb;
        }
        .international-slider .swiper-button-next,
        .international-slider .swiper-button-prev {
          display: none;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.1,
            spaceBetween: 24,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop={true}
        className="w-full international-slider"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[200px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls - Dots Center, Arrows Right */}
      <div className="flex items-center justify-between mt-6 px-2">
        {/* Pagination Dots - Center */}
        <div className="custom-pagination flex-1 flex justify-center"></div>
        
        {/* Navigation Buttons - Right */}
        <div className="flex gap-3">
          <button
            className="custom-prev w-11 h-11 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="custom-next w-11 h-11 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}