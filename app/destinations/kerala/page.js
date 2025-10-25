'use client';
import React from 'react';
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

const tours = [
  { title: "Kerala Backpacking Festive Bliss Journey", dates: ["Dates on Request"], prices: ["₹33,999*","₹31,499*"], image: "/img/kerla.jpg", duration: "6N7D", group: "Group Tour" },
  { title: "Kerala Luxurious Honeymoon Paradise", dates: ["Dates on Request"], prices: ["₹28,999*", "₹25,499*", "₹3,500 Off"], image: "/img/kerla.jpg", duration: "4N5D", group: "Honeymoon Package" },
  { title: "Kerala Backpacking Wild Adventure Saga", dates: ["Dates on Request"], prices: ["₹27,999*", "₹24,999*", "₹3,000 Off"], image: "/img/kerla.jpg", duration: "6N7D", group: "Group Tour" },
  { title: "Kerala Romantic Haven Enchantment", dates: ["Dates on Request"], prices: ["₹22,999*", "₹19,999*", "₹3,000 Off"], image: "/img/kerla.jpg", duration: "3N4D", group: "Honeymoon Package" }
];

const SpitiValleyTour = () => {
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
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/kerala2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Kerala Tour
        </h2>
        <motion.form
          id="travel"
          autoComplete="on"
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
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
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
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
          />
          <label htmlFor="package" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Package
          </label>
          <select
            id="package"
            name="package"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
          >
            <option value="Spiti Valley Tour">Kerala – God’s Own Country Tour</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Sikkim">Sikkim</option>
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
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
          />
          <motion.input
            type="submit"
            value="Submit"
            className="w-full bg-[#00453a] text-white p-2 rounded hover:bg-green-600 transition font-bold text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.form>
      </div>
      <div className="flex flex-col items-center text-center my-12 px-4 w-full max-w-6xl mx-auto bg-gradient-to-b from-[#F1FDF3] to-white rounded-lg shadow-lg p-8">
        <motion.h2
          className="font-sans text-4xl sm:text-5xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kerala – God’s Own Country
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Kerala, the land where nature whispers peace and beauty flows through every corner. Known as God’s Own Country, Kerala is a paradise of swaying coconut palms, tranquil backwaters, misty hills, and golden beaches. Whether you’re seeking romance, relaxation, adventure, or cultural exploration, Kerala offers the perfect blend of all. With its pristine landscapes, vibrant traditions, and warm hospitality, it truly captures the essence of heaven on earth.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">The Charm of Nature and Backwaters</h3>
              <p className="text-gray-600 leading-relaxed">
                Kerala’s charm lies in its breathtaking natural beauty. The calm backwaters of Alleppey and Kumarakom are like a dreamscape where you can drift through palm-fringed canals on a traditional houseboat. The gentle ripples of water, lush green paddy fields, and rustic village life create an experience that soothes the soul.
                The hill stations of Munnar, Wayanad, and Thekkady are a haven for nature lovers. Rolling tea gardens, spice plantations, and mist-covered valleys make them ideal for those who love peace and greenery. Don’t miss the chance to visit the Periyar Wildlife Sanctuary, where you can spot elephants and other wildlife amidst scenic surroundings.

              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Sun, Sand, and Sea</h3>
              <p className="text-gray-600 leading-relaxed">
                Kerala’s coastline stretches for miles, offering some of India’s most beautiful beaches. Kovalam, Varkala, and Marari are perfect for those who want to relax under the sun or enjoy a peaceful evening watching the waves. The golden sands and clear blue waters make Kerala a dream destination for honeymooners and beach lovers alike.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Culture, Festivals, and Traditions</h3>
              <p className="text-gray-600 leading-relaxed">
                Kerala’s rich culture is woven through its art, music, and traditions. Witness the grace of Kathakali and Mohiniyattam dance performances, or explore centuries-old temples and churches that tell stories of faith and history. The state’s famous festivals like Onam, Vishu, and Thrissur Pooram fill the air with joy, color, and devotion.
Kerala’s people are known for their simplicity, kindness, and hospitality. Every visitor is treated like family, which makes traveling here an even more heartwarming experience.

              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">A Food Lover’s Paradise</h3>
              <p className="text-gray-600 leading-relaxed">
                No trip to Kerala is complete without indulging in its flavorful cuisine. The aroma of coconut, curry leaves, and spices defines the state’s culinary charm. Try traditional dishes like Kerala Sadya, Appam with Stew, Puttu and Kadala Curry, and fresh seafood delicacies that are sure to delight your taste buds. Served traditionally on banana leaves, every meal is a feast for both the eyes and the soul.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit Kerala</h3>
              <p className="text-gray-600 leading-relaxed">
                Kerala is a year-round destination, but each season brings a different experience:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Winter (October to February): </strong> The best time for sightseeing, backwater cruises, and beach vacations.</li>
                <li><strong>Monsoon (June to September): </strong>Perfect for experiencing lush green landscapes and rejuvenating Ayurvedic therapies. </li>
                <li><strong>Summer (March to May):  </strong>Great for hill station visits and off-season travel deals. </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-8 py-3 cursor-pointer bg-green-900 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center text-green-900 flex-1 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img width={100} height={100} src={stat.img} alt="" className="w-12 h-12 mx-auto" />
            <p className="mt-2 text-lg font-bold" dangerouslySetInnerHTML={{ __html: stat.text }} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Kerala Tour Packages
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
                    <motion.button
                      onClick={() => handleOpenModal(tour)}
                      whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-5 py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300"
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
                <img
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
  return <SpitiValleyTour />;
};

export default Page;