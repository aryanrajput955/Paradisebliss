'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function VideoSlider() {
  const videos = [
    {
      src: '/videos/kashmir.mp4',
      title: 'Beautiful Valley',
      description: 'Kashmir',
      profileImg: '/img/banner/Kashmir.png'
    },
    {
      src: '/videos/Ladakh2.mp4',
      title: 'Ladakh Valley',
      description: 'Ladakh',
      profileImg: '/img/banner/Ladakh.png'
    },
    {
      src: '/videos/uttarakhand.mp4',
      title: 'Mountains',
      description: 'Uttarakhand',
      profileImg: '/img/banner/Uttrakhand.png'
    },
    {
      src: '/videos/spiti.mp4',
      title: 'Spiti Valley',
      description: 'Spiti',
      profileImg: '/img/banner/Spiti.png'
    },
    {
      src: '/videos/rajasthan.mp4',
      title: 'Fort',
      description: 'Rajasthan',
      profileImg: '/img/Rajasthan.jpg'
    },
    {
      src: '/videos/kerela.mp4',
      title: 'Waterfall',
      description: 'Kerala',
      profileImg: '/img/banner/Kerala.png'
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-5xl md:text-6xl font-bold pt-10 text-center"
        >
          See What It Feels Like
        </h1>
      </div>
      <div style={{ backgroundColor: 'var(--light-green)' }} className="flex items-center justify-center relative">
        <div className="max-w-4xl w-full px-4 py-10 relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true, el: '.custom-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="py-4"
            navigation={false}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
                  className="bg-transparent rounded-xl shadow-xl overflow-hidden transition-all duration-300 relative"
                >
                  <div className="w-[700px] h-[400px]">
                    <video
                      src={video.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-xl"
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                      onClick={(e) => (e.target.paused ? e.target.play() : e.target.pause())}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src={video.profileImg}
                          alt={`${video.description} profile`}
                          className="w-12 h-12 object-cover rounded-full border-2 border-white"
                        />
                        <div>
                          <h3 className="text-xl font-bold truncate line-clamp-2">{video.title}</h3>
                          <p className="text-sm">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx>{`
  .custom-pagination {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    z-index: 10;
  }

  .custom-pagination .swiper-pagination-bullet {
    background: white;
    opacity: 0.8;
    width: 10px;
    height: 10px;
    margin: 0 6px;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    background: var(--color-dark);
    opacity: 1;
    transform: scale(1.2);
  }
`}</style>

          <div className="custom-pagination"></div>
        </div>
      </div>
    </>
  );
}
