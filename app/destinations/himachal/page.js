'use client';
import React from 'react';
import Image from 'next/image';
import { useState,useRef,useEffect } from 'react';
import ToursSlider from '@/components/tourSlider';
import WhyChooseUs from '@/components/whychooseus';
const Ladakh = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // Update the height of the content dynamically when it opens/closes
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
<div
      className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/img/himachal3.jpg')" }}
    >
      {/* Heading */}
      <h2
        className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
      >
        Himachal Tour
      </h2>

      {/* Form - Hidden below lg (1024px) */}
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
          className="w-full bg-[#00453a] font-bold text-white p-2 rounded hover:bg-green-600 transition text-sm sm:text-base"
        />
      </form>
    </div>


    <div className="flex flex-col items-center text-center my-12 px-4 w-[80%] mx-auto max-w-5xl">
      {/* Heading */}
      <h2 className="font-sans text-4xl mb-4">Information About Spiti Valley Tour</h2>
      {/* Initial Paragraph */}
      <p className="font-cursive text-lg mb-4">
        Spiti Valley is a cold desert mountain valley located in the Indian state of Himachal Pradesh. Known for its breathtaking landscapes, ancient monasteries, and adventure opportunities, Spiti Valley is a dream destination for nature lovers and thrill-seekers.
      </p>
      {/* Expanded Content */}
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
          <h3 className="text-2xl mb-4">Spiti Valley Tour Overview</h3>
          <h4 className="text-xl mb-2">Best Time to Visit</h4>
          <p>
            <b>Summer (May to September):</b> Ideal time to visit as roads are clear, and weather is pleasant.
          </p>
          <p>
            <b>Winter (October to April):</b> Only accessible via Shimla route; extreme cold and heavy snowfall.
          </p>
          {/* Add more content here as needed */}
        </div>
      </div>
      {/* Button (At Bottom) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-6 py-2 bg-green-900 text-white rounded hover:bg-green-700 transition-all duration-300 ease-in-out"
      >
        {isOpen ? 'Show Less' : 'Know More'}
      </button>
    </div>

{/* Video section */}

    <div className="flex flex-col lg:flex-row items-center justify-between p-8 border-green-100 border-2 shadow-xl rounded-lg my-10 max-w-6xl mx-auto">
      <div className="flex-1 pr-0 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
        <h2 className="text-4xl text-green-900 mb-4">Wanna Know More?</h2>
        <p className="text-lg text-gray-600">
          Discover more about the breathtaking Spiti Valley and its hidden gems. Watch the video to get a glimpse of the adventure that awaits you.
        </p>
      </div>
      <div className="flex-1">
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.youtube.com/embed/bqbsj3muUEY?si=tef3SpYAw79lkSi3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-green-900 flex-1 max-w-xs mx-auto">
            <Image width={100} height={100} src={stat.img} alt="" className="w-12 h-12 mx-auto" />
            <p className="mt-2 text-lg font-bold" dangerouslySetInnerHTML={{ __html: stat.text }} />
          </div>
        ))}
      </div>
    <ToursSlider />
    <WhyChooseUs />
    </>
  );
};

const Page = () => {
  return <Ladakh />;
};

export default Page;
