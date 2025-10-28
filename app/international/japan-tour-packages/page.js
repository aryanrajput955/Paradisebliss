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
import Link from 'next/link';

const tours = [
  {
    title: "Tokyo & Kyoto Cultural Escape",
    dates: ["Mar 15", "Apr 01", "May 10"],
    prices: ["Starting ₹1,49,990*", "₹1,29,990*"],
    image: "/optimised/japan.webp",
    duration: "10D/9N",
    group: "Group Tour",
    link: "/trip-packages/tokyo-kyoto-osaka-10-day-cultural-tour",
  },
  // Add more tours with unique `link` paths
];

const JapanTour = () => {
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
    package: 'Japan Tour',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Japan Tour' });
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
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Japan Tour' });
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
        style={{ backgroundImage: "url('/optimised/japan.webp')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Japan Tour
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
            alt="Paradise Bliss Tours Logo"
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
            <option value="Japan Tour">Japan Tour</option>
            <option value="Cherry Blossom Tour">Cherry Blossom Tour</option>
            <option value="Winter Japan">Winter Japan</option>
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
          Explore Japan with Paradise Bliss Tours - from neon cities to serene temples
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Japan is a place of contrasts: ultra-modern cities, timeless traditions, stunning landscapes, cherry blossoms, snow-capped mountains, sushi streets, tranquil tea-houses, and serene gardens. At Paradise Bliss Tours, our Japan packages offer a perfect blend of all these elements - carefully organized to be immersive, exciting, and unforgettable.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">What to Expect</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Multi-city itineraries covering Tokyo, Kyoto, Osaka & more</li>
                <li>Comfortable stays in a mix of traditional ryokans (Japanese inns) and modern hotels</li>
                <li>Fast transport: high-speed bullet trains (Shinkansen) for inter-city travel</li>
                <li>Local, English-speaking guides to help you experience the deeper culture: tea ceremonies, kimono rentals, sushi-making classes, shrines & temples, street food, nightlife & hidden gems</li>
                <li>Optional add-ons: ski & snow adventures in winter, cherry blossom viewing in spring, hot springs (onsen), night markets, theme parks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Spring (Mar-May):</strong> Cherry blossoms, mild weather - great for sightseeing & hanami strolls</li>
                <li><strong>Summer (Jun-Aug):</strong> Festivals (matsuri), vibrant city life; coastal escapes and greenery in full bloom</li>
                <li><strong>Autumn (Sep-Nov):</strong> Gorgeous autumn foliage; cooler, crisp weather; great for temples & rural landscapes</li>
                <li><strong>Winter (Dec-Feb):</strong> Snow sports, onsen (hot spring) relaxation; winter light festivals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Must-Visit Places & Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Tokyo:</strong> Shibuya Crossing, anime & technology districts, food streets, futuristic architecture</li>
                <li><strong>Kyoto:</strong> Golden Pavilion, Fushimi Inari Shrine, geisha districts, traditional tea houses</li>
                <li><strong>Osaka:</strong> Energetic street food, Dotonbori, vibrant nightlife, Osaka Castle</li>
                <li><strong>Other regions:</strong> Mt Fuji & the Fuji Five Lakes area; Hiroshima & Miyajima; the snow regions like Hokkaido; hot springs in Hakone or Nagano; island escapes such as Okinawa</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Travel Tips & Practical Info</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Currency:</strong> Japanese Yen (JPY). Credit cards are widely accepted in cities; carry cash for smaller towns/temples.</li>
                <li><strong>Language:</strong> Japanese. English works in tourist areas. Learning a few basic phrases goes a long way.</li>
                <li><strong>Etiquette:</strong> Remove shoes indoors, respect quiet zones, be punctual, be polite, especially in traditional settings.</li>
                <li><strong>Connectivity:</strong> Pocket WiFi or a local SIM are helpful; free WiFi is common in hotels and many cafes.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Why Travel Japan with Paradise Bliss Tours?</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Tailored Packages:</strong> You choose the pace - deep cultural immersion, relaxed travel, or fast-paced adventure.</li>
                <li><strong>Seamless Logistics:</strong> Hotels, transport (including bullet trains), transfers, and tickets taken care of so you can experience.</li>
                <li><strong>Curated Local Experiences:</strong> Let us connect you with local culture - tea ceremonies, local foods, hidden paths, and traditional inns.</li>
                <li><strong>Expert Guidance & Support:</strong> English-speaking guides, 24/7 support, on-ground help; visa assistance as required.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Ready to Go Further?</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're planning a Cherry Blossom tour, a Winter Ski Adventure, a Spring cultural wander, or a Summer festival road-trip, Paradise Bliss Tours will design your dream Japan itinerary. Reach out to us for departure dates, customizations, and special group offers.
              </p>
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
          Japan Tour Packages
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
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full">
                  {/* Motion wrapper for hover scale */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    }}
                    className="h-full flex flex-col"
                  >
                    {/* Clickable area: image + info */}
                    <Link href={tour.link} className="flex-1 flex flex-col cursor-pointer">
                      <img
                        height={224}
                        width={400}
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-56 object-cover rounded-t-xl"
                      />
                      <div className="p-6 flex-1 flex flex-col">
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
                    </Link>

                    {/* Request Callback Button - OUTSIDE the Link */}
                    <div className="px-6 pb-6">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleOpenModal(tour);
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300 cursor-pointer"
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
                </div>
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
                  className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
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

export default JapanTour;