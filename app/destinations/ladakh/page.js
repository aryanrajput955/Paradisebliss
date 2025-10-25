'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WhyChooseUs from '@/components/whychooseus';

const tours = [
  {
    title: "Leh Ladakh Explorer",
    dates: ["May 15", "June 01", "July 10"],
    prices: ["Starting ₹25,990*", "₹22,990*"],
    image: "/img/ladakh.jpg",
    duration: "7D6N",
    group: "Group Tour",
  },
  {
    title: "Pangong Lake Adventure",
    dates: ["May 20", "June 05", "July 15"],
    prices: ["Starting ₹22,990*", "₹19,990*"],
    image:  "/img/ladakh.jpg",
    duration: "5D4N",
    group: "Group Tour",
  },
  {
    title: "Nubra Valley Bike Tour",
    dates: ["June 10", "July 05", "Aug 01"],
    prices: ["Starting ₹35,990*", "₹32,990*"],
    image: "/img/ladakh.jpg",
    duration: "6D5N",
    group: "Group Tour",
  },
  {
    title: "Ladakh Monastery Circuit",
    dates: ["May 25", "June 15", "July 20"],
    prices: ["Starting ₹28,990*", "₹25,990*"],
    image:  "/img/ladakh.jpg",
    duration: "8D7N",
    group: "Group Tour",
  },
  {
    title: "Chadar Trek Winter Adventure",
    dates: ["Jan 10", "Jan 25", "Feb 05"],
    prices: ["Starting ₹40,990*", "Price On Request*"],
    image:  "/img/ladakh.jpg",
    duration: "9D8N",
    group: "Group Tour",
  },
];

const LadakhTour = () => {
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
    email: '',
    package: 'Ladakh Tour',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Ladakh Tour' });
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

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    console.log('Hero form submitted:', formData);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Ladakh Tour' });
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/instagram.png', text: 'Community of<br/> 400k+ On Instagram' },
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/ladakh.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Ladakh Tour
        </h2>
        <motion.form
          id="travel"
          autoComplete="on"
          onSubmit={handleHeroFormSubmit}
          className="hidden lg:block bg-[#E4DECF]/90 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            width={100}
            height={100}
            src="/img/logo.png"
            alt="Paradise Uttarakhand Logo"
            className="w-16 sm:w-20 md:w-24 mb-4 mx-auto"
          />
          <label htmlFor="name" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Full name"
          />
          <label htmlFor="phone" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Phone number"
          />
          <label htmlFor="package" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Package
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Tour package selection"
          >
            <option value="Ladakh Tour">Ladakh Tour</option>
            <option value="Rajasthan Tour">Rajasthan Tour</option>
            <option value="Sikkim">Sikkim</option>
          </select>
          <label htmlFor="email" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@mail.com"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Email address"
          />
          <motion.input
            type="submit"
            value="Submit"
            className="w-full bg-[#00453a] text-white p-2 rounded hover:bg-green-600 transition font-bold text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Submit form"
          />
        </motion.form>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center text-center my-12 px-4 w-full max-w-6xl mx-auto bg-gradient-to-b from-[#F1FDF3] to-white rounded-lg shadow-lg p-8">
        <motion.h2
          className="font-sans text-4xl sm:text-5xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ladakh – The Land of High Passes
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dream destination for every traveler seeking serenity, adventure, and a spiritual connection with nature. Popularly known as the “Land of High Passes,” Ladakh is a unique blend of raw natural beauty, ancient monasteries, and vibrant local culture. With its snow-capped peaks, azure lakes, and endless stretches of rugged landscapes, Ladakh offers a once-in-a-lifetime experience that stays in your heart forever.
        </motion.p>
        <div
          ref={contentRef}
          className={`text-left w-full max-w-5xl overflow-hidden transition-all duration-700 ease-in-out transform ${
            isOpen ? 'opacity-100 scale-y-100 mb-6' : 'opacity-0 scale-y-0'
          }`}
          style={{
            height: isOpen ? `${contentHeight}px` : '0px',
            transformOrigin: 'top',
          }}
        >
          <div className="py-6 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">A Paradise for Adventure and Peace Seekers</h3>
              <p className="text-gray-600 leading-relaxed">
                Ladakh isn’t just about breathtaking views—it’s about feeling alive in the purest sense. From motorbike rides on the world’s highest motorable roads to trekking through scenic valleys, every moment in Ladakh is filled with excitement and wonder. The thrill of crossing Khardung La Pass, exploring the stunning Nubra Valley, or camping under a million stars at Pangong Lake creates memories you’ll cherish for a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For adventure lovers, activities like river rafting on the Zanskar River, mountain biking, and camel rides on the sand dunes of Hunder offer unmatched adrenaline rushes. Yet, beyond the adventure, Ladakh’s silent monasteries and calm lakes provide deep peace to the soul.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Captivating Destinations to Explore</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Leh:</strong> The heart of Ladakh, known for its colorful markets, Leh Palace, and Shanti Stupa offering panoramic mountain views.</li>
                <li><strong>Pangong Lake:</strong> The mesmerizing blue lake that changes colors throughout the day—truly a photographer’s delight.</li>
                <li><strong>Nubra Valley:</strong> Famous for its sand dunes, double-humped camels, and the majestic Diskit Monastery.</li>
                <li><strong>Tso Moriri Lake:</strong> A tranquil high-altitude lake surrounded by snow-capped mountains, perfect for nature lovers.</li>
                <li><strong>Magnetic Hill:</strong> A unique phenomenon where vehicles appear to roll uphill, defying gravity.</li>
                <li><strong>Lamayuru Monastery:</strong> Known as the “Moonland of Ladakh,” this ancient monastery offers breathtaking views and spiritual calmness.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Culture and People of Ladakh</h3>
              <p className="text-gray-600 leading-relaxed">
                The people of Ladakh, with their warm smiles and rich traditions, add soul to this cold desert. Deeply rooted in Buddhist culture, the region celebrates vibrant festivals like Hemis Festival and Losar, where colorful masks, dances, and rituals bring the mountains alive. Visiting the monasteries of Hemis, Thiksey, and Alchi gives you a glimpse into Ladakh’s centuries-old spirituality and heritage.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Ladakhi Cuisine</h3>
              <p className="text-gray-600 leading-relaxed">
                Ladakh’s cuisine is simple yet hearty, designed to warm you in the high-altitude cold. Savor dishes like Thukpa (noodle soup), Momos (dumplings), Skyu (pasta stew), and Butter Tea. Each meal reflects the region’s rugged lifestyle and cultural heritage, often enjoyed in cozy homestays with local families.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit Ladakh</h3>
              <p className="text-gray-600 leading-relaxed">
                Ladakh can be visited almost year-round, depending on the experience you seek:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Summer (May to September):</strong> The best time to visit Ladakh, with pleasant weather and open roads, ideal for exploring landscapes, lakes, and valleys.</li>
                <li><strong>Winter (December to February):</strong> A winter wonderland perfect for the Chadar Trek on the frozen Zanskar River, offering a unique adventure.</li>
              </ul>
            </div>
          </div>
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-8 py-3 cursor-pointer bg-green-900 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Show less content' : 'Show more content'}
        >
          {isOpen ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center text-green-900 flex-1 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              width={48}
              height={48}
              src={stat.img}
              alt={stat.text.split('<br/>')[0]}
              className="w-12 h-12 mx-auto"
            />
            <p
              className="mt-2 text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: stat.text }}
            />
          </motion.div>
        ))}
      </div>
      {/* Tour Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Ladakh Tour Packages
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
                  className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full"
                >
                  <img
                    height={224}
                    width={400}
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-56 object-cover rounded-t-xl"
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
                    <motion.button
                      onClick={() => handleOpenModal(tour)}
                      whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-5 py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300"
                      aria-label={`Request callback for ${tour.title}`}
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
            aria-hidden="true"
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
              aria-label="Close modal"
            >
              ✕
            </button>
            {selectedTour && (
              <div className="mb-4">
                <img
                  height={128}
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
                    aria-label="Full name"
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
                    aria-label="Phone number"
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
                      aria-label="Preferred travel date"
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
                    aria-label="Number of travellers"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold transition-colors duration-300"
                  aria-label="Submit request"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      <style jsx>{`
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

export default LadakhTour;