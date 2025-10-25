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
  { title: "Winter Kashmir Holiday Extravaganza", dates: ["Dec 22", "Dec 28"], prices: ["₹30,499*", "₹25,499*", "₹5,000 Off"], image: "/img/kashmir.jpg", duration: "5N6D", group: "Group Trip" },
  { title: "Kashmir Backpacking Odyssey", dates: ["Dates on Request"], prices: ["₹26,999*", "₹24,499*", "₹2,500 Off"], image: "/img/kashmir.jpg", duration: "5N6D", group: "Group Trip" },
  { title: "Magnificent Kashmir Romantic Escape", dates: ["Dates on Request"], prices: ["Price on Request*"], image: "/img/kashmir3.jpg", duration: "4N5D", group: "Couple Tour Package" },
  { title: "Winter Kashmir Ultimate Circuit Journey", dates: ["Dates on Request"], prices: ["Price on Request*"], image: "/img/kashmir.jpg", duration: "6N7D", group: "Customized Holidays" },
  { title: "Kashmir Snowy Peaks Expedition", dates: ["Jan 05", "Jan 12"], prices: ["₹35,999*", "₹32,499*", "₹3,500 Off"], image: "/img/kashmir3.jpg", duration: "6N7D", group: "Group Adventure" }
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
        style={{ backgroundImage: "url('/img/kashmir.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Kashmir Tour
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
            <option value="Spiti Valley Tour">Kashmir Tour</option>
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
          Kashmir – The Paradise on Earth
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Known as “Heaven on Earth,” Kashmir is a land where nature reveals its most breathtaking beauty. With snow-clad mountains, crystal-clear lakes, blooming gardens, and a rich cultural heritage, Kashmir is a dream destination that captivates every traveler’s heart. Whether you’re seeking romance, peace, or adventure, this enchanting valley promises experiences that stay with you forever.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">The Beauty That Defines Paradise</h3>
              <p className="text-gray-600 leading-relaxed">
                Kashmir’s charm lies in its serene landscapes and natural splendor. The shimmering Dal Lake and Nigeen Lake in Srinagar are adorned with colorful shikaras and houseboats, offering peaceful rides amidst floating gardens and snow-capped backdrops. As you float gently on the water, time seems to slow down, letting you soak in the valley’s timeless beauty.
In spring and summer, Kashmir turns into a vibrant painting of colors. The Tulip Garden, Shalimar Bagh, and Nishat Bagh bloom with life, while the surrounding mountains stand tall and majestic. When winter arrives, the valley transforms into a white wonderland, perfect for skiing, snow fights, and cozy moments by the fire.

              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Must-Visit Destinations in Kashmir </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>SriNagar:</strong> The capital city and the heart of Kashmir, known for Dal Lake, Mughal Gardens, and vibrant local markets.</li>
                <li><strong>Gulmarg:</strong> A paradise for adventure seekers — famous for skiing, the Gulmarg Gondola (one of the world’s highest cable cars), and snow-covered landscapes </li>
                <li><strong>Pahalgam:</strong>Known as the “Valley of Shepherds,” it’s a peaceful retreat surrounded by pine forests and rivers — perfect for nature walks and picnics. </li>
                <li><strong>Sonamarg: </strong>The “Meadow of Gold,” famous for its glaciers, rivers, and breathtaking mountain views.</li>
                <li><strong>Betaab Valley & Aru Valley: </strong>Ideal for photography, camping, and experiencing untouched natural beauty.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Adventure in the Himalayas</h3>
              <p className="text-gray-600 leading-relaxed">
               Kashmir is not just about serenity — it’s also a playground for adventure lovers. From trekking through alpine trails and skiing in Gulmarg, to white-water rafting in Lidder River and camping under starlit skies, every adventure here comes with a touch of magic. The region is also a gateway for the famous Amarnath Yatra, attracting thousands of devotees each year.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Culture, Cuisine & Warm Hospitality</h3>
              <p className="text-gray-600 leading-relaxed">
               Kashmir’s culture is a beautiful blend of tradition, art, and warmth. The people are known for their unmatched hospitality — always greeting visitors with a smile and a hot cup of Kahwa (saffron tea). The aroma of Kashmiri Wazwan, a royal feast of multiple dishes, fills the air with irresistible flavors. Other must-try dishes include Rogan Josh, Yakhni, and Gushtaba, each reflecting Kashmir’s rich culinary heritage.
The valley is also famous for its handwoven Pashmina shawls, Kashmiri carpets, and dry fruits, making it a perfect shopping destination for authentic souvenirs.
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit Kashmir </h3>
            <p className="text-gray-600 leading-relaxed">
              Each season in Kashmir offers a different shade of beauty:
            </p>
            <div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Spring (March to May): </strong>Blooming tulips and colorful gardens. </li>
                <li><strong>Summer (June to August): </strong> Ideal for sightseeing, trekking, and boating.</li>
                <li><strong>Winter (November to February):  </strong>Perfect for snow adventures and honeymoon trips.</li>
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
          Kashmir Tour Packages
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