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
import ToursSlider from '@/components/tourSlider';

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
        style={{ backgroundImage: "url('/img/uttarakhand2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Uttarakhand Tour
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
            <option value="Spiti Valley Tour">Spiti Valley Tour</option>
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
          Uttarakhand – The Dev Bhoomi of India
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nestled in the heart of the Himalayas, Uttarakhand is truly the Dev Bhoomi — the Land of Gods. With its sacred temples, peaceful lakes, snow-clad peaks, and lush valleys, Uttarakhand is a perfect blend of spirituality, adventure, and natural beauty. Whether you seek divine blessings, a refreshing mountain escape, or thrilling adventures, this Himalayan paradise offers it all.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">The Land of Spiritual Bliss</h3>
              <p className="text-gray-600 leading-relaxed">
                Uttarakhand is home to some of India’s most sacred pilgrimage sites. The famous Char Dham Yatra — Yamunotri, Gangotri, Kedarnath, and Badrinath — draws millions of devotees every year who come seeking spiritual enlightenment. Temples like Triyuginarayan, Tungnath (the highest Shiva temple), and Har Ki Pauri in Haridwar reflect the divine energy that flows through this land.
The holy cities of Rishikesh and Haridwar are gateways to the Himalayas and centers for yoga, meditation, and spiritual learning. The serene Ganga Aarti at Har Ki Pauri or the peaceful vibe at Parmarth Niketan Ashram leaves every traveler deeply moved.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Nature’s Wonderland</h3>
              <p className="text-gray-600 leading-relaxed">
                Uttarakhand is blessed with some of the most breathtaking natural landscapes in India. From the snow-covered peaks of Auli and Munsiyari to the peaceful lakes of Nainital and Bhimtal, the state is a treasure of scenic wonders. The lush meadows of Chopta, known as the “Mini Switzerland of India,” and the colorful blooms of the Valley of Flowers National Park are pure poetry in nature’s language.
For wildlife lovers, Jim Corbett National Park offers thrilling jeep safaris and a chance to witness the majestic Bengal tiger. Whether you’re walking through pine forests or gazing at starry skies in hill stations like Mussoorie, Lansdowne, and Ranikhet, Uttarakhand’s charm never fades.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Adventure Awaits You</h3>
              <p className="text-gray-600 leading-relaxed">
               Uttarakhand is not just a peaceful retreat — it’s also an adventurer’s paradise! The gushing rivers and lofty mountains offer endless opportunities for rafting, trekking, camping, skiing, and paragliding. Experience the thrill of river rafting in Rishikesh, skiing in Auli, trekking to Kedarnath or Tungnath, and camping under the stars in Chopta. For those who love road trips, drives through the winding mountain roads will leave you mesmerized.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Culture, Food & Warm Hospitality</h3>
              <p className="text-gray-600 leading-relaxed">
               The culture of Uttarakhand is deeply rooted in simplicity and devotion. The people, with their warm smiles and humble nature, make every visitor feel like family. Folk dances, local fairs, and traditional music add life to this Himalayan state. The local cuisine, including Kafuli, Phaanu, Jhangora ki Kheer, and Aloo ke Gutke, offers a taste of authentic mountain flavors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit Uttarakhand</h3>
              <p className="text-gray-600 leading-relaxed">
              Uttarakhand is a year-round destination, each season bringing its own beauty.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Summer (March to June):</strong> Ideal for hill station getaways and adventure sports.</li>
                <li><strong>Monsoon (July to September):</strong> Perfect for lush green landscapes and photography.</li>
                <li><strong>Winter (October to February):</strong> Great for snow lovers and honeymooners.</li>
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
      <ToursSlider />
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