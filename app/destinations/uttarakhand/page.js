'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import WhyChooseUs from '@/components/whychooseus';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

// Updated tours array with unique slugs for linking
const tours = [
  {
    title: "Badrinath Yatra",
    slug: "badrinath-yatra",
    dates: ["May 10", "May 22", "June 15"],
    prices: ["Starting ₹32,990*", "₹28,990*"],
    image: "/img/shoot/badrinath_road.jpg",
    duration: "3D2N",
    group: "Group Tour",
  },
  {
    title: "Kedarnath Yatra",
    slug: "kedarnath-yatra",
    dates: ["May 12", "May 25", "June 18"],
    prices: ["Starting ₹32,990*", "₹27,990*"],
    image: "/img/shoot/kedarnath_road.jpg",
    duration: "3D2N",
    group: "Group Tour",
  },
  {
    title: "Badrinath Kedarnath By Helicopter",
    slug: "badrinath-kedarnath-helicopter",
    dates: ["May 15", "May 28", "June 20"],
    prices: ["Starting ₹1,25,000*", "₹1,20,000*"],
    image: "/img/2dham-helocopter.jpg",
    duration: "1Day",
    group: "Group Tour",
  },
  {
    title: "CharDham Yatra By Helicopter",
    slug: "chardham-yatra-helicopter",
    dates: ["May 18", "May 30", "June 22"],
    prices: ["Starting ₹2,45,000*", "₹2,28,000*"],
    image: "/img/shoot/chardham_helicopter.jpg",
    duration: "6D5N",
    group: "Group Tour",
  },
  {
    title: "CharDham Luxury Package",
    slug: "chardham-luxury",
    dates: ["May 20", "June 5", "June 25"],
    prices: ["Starting ₹45,000*", "₹39,900*"],
    image: "/img/shoot/Luxury.jpg",
    duration: "12D11N",
    group: "Group Tour",
  },
  {
    title: "CharDham Yatra from Delhi",
    slug: "chardham-yatra-delhi",
    dates: ["May 23", "June 10", "June 28"],
    prices: ["Starting ₹48,900*", "₹44,000*"],
    image: "/img/shoot/chardham_delhi.jpg",
    duration: "11D10N",
    group: "Group Tour",
  },
  {
    title: "CharDham Yatra from Bangalore",
    slug: "chardham-yatra-bangalore",
    dates: ["May 25", "June 12", "June 30"],
    prices: ["Starting ₹49,900*", "₹43,900*"],
    image: "/img/shoot/chardham_banglore.jpg",
    duration: "13D12N",
    group: "Group Tour",
  },
];
const Ladakh = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    travellers: '',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, tour: selectedTour });
    handleCloseModal();
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/instagram.png', text: 'Community of<br/> 400k+ On Instagram' },
    { img: '/img/google.png', text: '6,000+<br/>Google Reviews' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/uttarakhand2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Uttarakhand Tour
        </h2>
        <form
          id="treavel"
          autoComplete="on"
          className="hidden lg:block bg-[#E4DECF]/90 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24"
        >
          <Image
            width={100}
            height={100}
            src="/img/logo.png"
            alt="Paradise Bliss Logo"
            className="w-16 sm:w-20 md:w-34 mb-4 mx-auto"
          />
          <label htmlFor="name" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
          />
          <label htmlFor="phone" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
          />
          <label htmlFor="package" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Package
          </label>
          <select
            id="package"
            name="package"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
          >
            <option value="Spiti Valley Tour">Spiti Valley Tour</option>
            <option value="Nepal">Ladakh</option>
            <option value="Dubai">Sikkim</option>
          </select>
          <label htmlFor="email" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full bg-[#00453A] font-bold text-white p-2 rounded hover:bg-green-600 transition text-sm sm:text-base"
          />
        </form>
      </div>

      {/* Information Section */}
      <div className="flex flex-col items-center text-center my-12 px-4 w-[80%] mx-auto max-w-5xl">
        <h2 className="font-sans text-4xl mb-4">Information About Uttarakhand Tour</h2>
        <p className="font-cursive text-lg mb-4">
          Uttarakhand, known as "Devbhoomi" (Land of the Gods), is a state in northern India famous for its Himalayan landscapes, sacred pilgrimage sites, and natural beauty. From the serene hill stations of Nainital and Mussoorie to the spiritual towns of Rishikesh and Haridwar, Uttarakhand offers a perfect blend of adventure, tranquility, and cultural richness.
        </p>
        <div
          ref={contentRef}
          className={`text-left max-w-xl overflow-hidden transition-all duration-700 ease-in-out transform ${
            isOpen ? 'opacity-100 scale-y-100 mb-6' : 'opacity-0 scale-y-0'
          }`}
          style={{
            height: isOpen ? `${contentHeight}px` : '0px',
            transformOrigin: 'top',
          }}
        >
          <div className="py-4">
            <h3 className="text-2xl mb-4">Uttarakhand Tour Overview</h3>
            <h4 className="text-xl mb-2">Best Time to Visit</h4>
            <p><b>Summer (March to June):</b> Pleasant weather for hill stations like Nainital and Auli.</p>
            <p><b>Monsoon (July to September):</b> Lush greenery, but beware of landslides.</p>
            <p><b>Winter (October to February):</b> Snowfall in Auli and Joshimath for snow lovers.</p>
            {/* Add more details as needed */}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 px-6 py-2 bg-green-900 text-white rounded hover:bg-green-700 transition-all duration-300 ease-in-out"
        >
          {isOpen ? 'Show Less' : 'Know More'}
        </button>
      </div>

      {/* Video Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 border-green-100 border-2 shadow-xl rounded-lg my-10 max-w-6xl mx-auto">
        <div className="flex-1 pr-0 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl text-green-900 mb-4">Wanna Know More?</h2>
          <p className="text-lg text-gray-600">
            Discover more about Uttarakhand and its hidden gems. Watch the video to get a glimpse of the adventure that awaits you.
          </p>
        </div>
        <div className="flex-1">
        <video
      className="w-full h-80 rounded-lg"
      controls
      preload="metadata"
    
    >
            <source src="/videos/uk.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-green-900 flex-1 max-w-xs mx-auto">
            <Image width={100} height={100} src={stat.img} alt="" className="w-12 h-12 mx-auto" />
            <p className="mt-2 text-lg font-bold" dangerouslySetInnerHTML={{ __html: stat.text }} />
          </div>
        ))}
      </div>

      {/* Tour Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Uttarakhand Tour Packages
        </h1>
      </div>

      <div
        style={{ backgroundColor: 'var(--light-green)' }}
        className="relative px-4 sm:px-6 lg:px-10 py-10"
      >
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.5 },
            }}
            className="py-8"
          >
            {tours.map((tour, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  {/* Clickable area wrapped in Link */}
                  <Link href={`/trip-packages/${tour.slug}`} passHref>
                    <div className="cursor-pointer flex-grow">
                      <Image
                        height={400}
                        width={400}
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-56 object-cover rounded-t-xl"
                        onError={(e) => {
                          console.error(`Failed to load image: ${tour.image}`);
                          e.target.src = '/img/placeholder.jpg';
                        }}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                        <p className="text-sm text-gray-700 mt-1">
                          {tour.duration} • {tour.group}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tour.dates.map((date, i) => (
                            <span
                              key={i}
                              className="bg-[#F1FDF3] text-[#00453a] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            >
                              <AiOutlineCalendar className="text-[#00453a]" />
                              {date}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 text-right">
                          <span className="text-gray-500 line-through text-base">
                            {tour.prices[0]}
                          </span>
                          <p className="text-xl font-bold text-green-600 mt-1">
                            {tour.prices[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Request Callback Button (outside Link) */}
                  <div className="p-6 pt-0">
                    <motion.button
                      onClick={() => handleOpenModal(tour)}
                      whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Request Callback
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-6 text-center"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {selectedTour && (
              <div className="mb-4">
                <Image
                  height={400}
                  width={400}
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {selectedTour.title}
                </h3>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                      placeholderText="Select date"
                      required
                    />
                    <AiOutlineCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Travellers
                  </label>
                  <input
                    type="number"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
        .swiper-container {
          position: relative;
        }
        .swiper-pagination-custom {
          position: relative;
          bottom: 0;
          padding-bottom: 10px;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          width: 12px;
          height: 12px;
          margin: 0 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-dark);
          width: 14px;
          height: 14px;
          opacity: 1;
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>
      <WhyChooseUs />
    </>
  );
};

const Page = () => {
  return <Ladakh />;
};

export default Page;