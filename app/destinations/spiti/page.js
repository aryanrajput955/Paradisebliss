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

const tours = [
  {
    title: "Winter Spiti Valley Tour",
    dates: ["March 28", "April 01", "April 15"],
    prices: ["Starting ₹20,990*", "₹17,990*"],
    image: "/img/spiti.jpg", // Ensure this path is correct
    duration: "8D7N",
    group: "Group Tour",
  },
  {
    title: "Spiti Valley with Chandra Taal",
    dates: ["March 29", "April 02", "April 15"],
    prices: ["Starting ₹20,990*", "₹16,000*"],
    image: "/img/chandrataal.png", // Ensure this path is correct
    duration: "5D4N",
    group: "Group Tour",
  },
  {
    title: "Spiti Valley Bike Tour Package",
    dates: ["March 27", "April 05", "April 14"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/bike.jpg", // Ensure this path is correct
    duration: "5D6N",
    group: "Group Tour",
  },
  {
    title: "Spiti Valley Full Circuit Tour",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹30,990*", "₹21,999*"],
    image: "/img/spiti3.jpg", // Ensure this path is correct
    duration: "7D6N",
    group: "Group Tour",
  },
  {
    title: "Manali Adventure",
    dates: ["Feb 01", "Feb 15", "Mar 01"],
    prices: ["Starting ₹32,990*", "Price On Request*"],
    image: "/img/holi.jpg", // Ensure this path is correct
    duration: "7D6N",
    group: "Group Tour",
  }
  
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


  // Update the height of the content dynamically when it opens/closes
  useEffect(() => {
    if (contentRef.current) {
      // Set height to the actual scrollHeight of the content
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
        style={{ backgroundImage: "url('/img/spiti2.jpg')" }}
      >
        {/* Heading */}
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Spiti Valley Tour
        </h2>

        {/* Form - Hidden below lg (1024px) */}
        <form
          id="travel"
          autoComplete="on"
          className="hidden lg:block bg-[#E4DECF]/90 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24"
        >
          <Image
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
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full bg-[#00453a] text-white p-2 rounded hover:bg-green-600 transition font-bold text-sm sm:text-base"
          />
        </form>
      </div>

      <div className="flex flex-col items-center text-center my-12 px-4 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-sans text-4xl mb-4">Information About Spiti Valley Tour</h2>
        {/* Initial Paragraph */}
        <p className="font-sans text-lg mb-4 w-full max-w-5xl">
          Explore About Spiti Valley Tour Packages at Paradise Uttarakhand. If you are considering a journey to Spiti, India's Little Tibet, situated in the northeastern Himalayan hills, you can now customize your Spiti Valley Tour Package—whether you're from Delhi, Mumbai, Bangalore, or any other Indian city—to experience the allure and stunning views of Spiti Valley. Reserve your Spiti Valley Tour Package now and prepare for your next hilltop getaway. One of the most captivating areas of the Indian Himalayas may be explored with Paradise Uttarakhand's amazing Spiti Valley Tour Packages.
        </p>
        {/* Expanded Content */}
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
          <div className="py-4">
            <h3 className="text-2xl mb-4">Spiti Valley Tour Overview</h3>
            <p className="mb-4">
              Spiti is a unique experience in every season, regardless of your level of experience. The land of monasteries, captivating snow-capped mountains, celestial rivers, and warm, distinct colors and cultures will awaken your soul like no other and leave you with life-changing experiences as you return home. Paradise Uttarakhand has made an effort to cater to nearly everyone's interests while creating these Spiti Valley Tour Packages, whether you're searching for a romantic honeymoon experience, a short trip, a long trip, a budget vacation, or simply want to see a new, fascinating place.
            </p>
            <p className="mb-4">
              Throughout the year, the Spiti Valley is accessible by road. The best time to visit Spiti will mostly rely on your personal preferences. Numerous mountain peaks higher than 5000 meters can be found in the area. Because of this, it is a well-liked destination for tourists, hikers, and campers during the summer months when temperatures range from 10 to 20 °C. It is blanketed in heavy winter snow for the remainder of the year, and the temperature stays well below freezing.
            </p>

            <h3 className="text-2xl mb-4">More About Spiti Valley</h3>
            <p className="mb-4">
              Since the Spiti Valley, which means "Middle Land" in the native tongue, is situated between Tibet and India, the valley's deeply ingrained Tibetan and Buddhist cultures are evident everywhere. Because the Spiti Valley is home to some of India's oldest monasteries, your journey will give you a firsthand look at Buddhist culture and monastic life.
            </p>
            <p className="mb-4">
              Did you know that Key Monastery is home to more than a thousand monks who live a celibate life apart from their families, and that Tabo Monastery is an old monastery that has been designated a heritage site? Additionally, during your road trip through the Spiti Valley, you will send a letter from Hikkim's highest post office, drink water from the picturesque river in Chitkul, the last settlement in India, ride across Kunzum Pass, one of the highest motorable spots in the world, and more.
            </p>
            <p className="mb-4">
              Situated 12,500 feet above sea level, the Spiti Valley in Himachal Pradesh boasts an awe-inspiring landscape and a surreal charm. Everything you might want for a satisfying holiday getaway is included in Spiti Valley packages, from its mouthwatering treats to lively markets to explore.
            </p>

            <h3 className="text-2xl mb-4">Best Places to Visit in Spiti Valley</h3>
            <h4 className="text-xl mb-2">1. Kee Gompa</h4>
            <p className="mb-4">
              On your vacation to Spiti Valley, stop by Kee Gompa, one of the region's most famous monasteries. It's situated in Kye hamlet near Kaza, the region's biggest town. Kee Gompa Monastery was constructed in the eleventh century and is more than a thousand years old. The multi-story monastery is well-known for its intriguing yet distinctive Tibetan architecture, featuring quarters for resident monks, a beautiful central courtyard, and a prayer hall.
            </p>

            <h4 className="text-xl mb-2">2. Highest Post Office, Hikkim</h4>
            <p className="mb-4">
              Hikkim boasts the world's highest post office, operating flawlessly despite its extreme elevation. You can send a postcard to your loved ones during your Spiti journey as a memento. A postcard costs between 20 and 100 INR. We advise bringing their address in advance due to poor cell connectivity.
            </p>

            <h4 className="text-xl mb-2">3. Chicham Bridge</h4>
            <p className="mb-4">
              Chicham Bridge, the greatest suspension bridge at a height of 13,000 feet, connects the villages of Chicham and Kibber. It bears significant importance for the connectivity of Spiti Valley and offers breathtaking views.
            </p>

            <h4 className="text-xl mb-2">4. Chandratal Lake</h4>
            <p className="mb-4">
              Known as the Lake of the Moon due to its crescent shape, Chandratal Lake in the Lahaul region is a must-see. Its turquoise waters change color throughout the day, surrounded by rustic desert mountains.
            </p>

            <h4 className="text-xl mb-2">5. Pin Valley National Park</h4>
            <p className="mb-4">
              A bio-reserve surrounded by crystal-clear lakes and verdant woods, Pin Valley National Park is home to endangered species like Himalayan snow leopards and ibex, along with rare birds such as the golden eagle.
            </p>

            <h4 className="text-xl mb-2">6. Trilokinath Temple</h4>
            <p className="mb-4">
              The only spot where both Hindus and Buddhists worship together, Trilokinath Temple in Lahaul-Spiti offers a serene, holy experience surrounded by verdant hills.
            </p>

            <h4 className="text-xl mb-2">7. Langza</h4>
            <p className="mb-4">
              Known as the "Fossil Village of India," Langza is one of the highest villages at 14,500 feet. It features a massive Buddha statue and is ideal for stargazing and photography.
            </p>

            <h4 className="text-xl mb-2">8. Keylong Market</h4>
            <p className="mb-4">
              Purchase gemstones, locally crafted jewelry, wool garments, shawls, and handcrafted items at Keylong Market, showcasing the vibrant culture of Spiti.
            </p>

            <h4 className="text-xl mb-2">9. Gue</h4>
            <p className="mb-4">
              Known as the Mummy settlement, Gue houses a 500-600-year-old mummified monk in a squatting stance, offering a unique historical experience.
            </p>

            <h4 className="text-xl mb-2">10. Tabo Monastery</h4>
            <p className="mb-4">
              Often called the 'Ajanta of the Himalayas,' Tabo Monastery features elaborate murals, historic paintings, and cultural artifacts, preserving traditional Tibetan heritage.
            </p>

            <h4 className="text-xl mb-2">11. Ghepan Lake</h4>
            <p className="mb-4">
              A beautiful trekking route, Ghepan Lake offers a serene setting for camping, with views of frozen glaciers, cascading waterfalls, and snow-capped mountains.
            </p>

            <h4 className="text-xl mb-2">12. Kibber</h4>
            <p className="mb-4">
              Famous for its charming desert mountains and Tibetan-style homes, Kibber offers access to the Kibber Monastery and Wildlife Sanctuary, showcasing vibrant Spiti culture.
            </p>

            <h3 className="text-2xl mb-4">Things to Do in Spiti Valley Trips</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Enjoy the scenery while river rafting on the Spiti and Pin rivers.</li>
              <li>Admire the Buddhist monasteries' historic architecture while listening to spiritual summons.</li>
              <li>Savor local cuisine like Thukpa, Chhang Tea, Tingmo, Sky, Tsampa, and dried apricots.</li>
              <li>Camp at Chandratal Lake to witness dazzling stars and changing hues of the sky.</li>
              <li>Experiment with nature photography amidst Spiti’s stunning landscapes.</li>
              <li>Trek to Dhankar Lake for breathtaking scenery above the Dhankar Monastery.</li>
              <li>Bicycle over the challenging Baralacha Pass to see the Zanskar Ranges.</li>
              <li>Shop for handicrafts and Tibetan artwork at Kaza Main Market.</li>
              <li>Take a Yak Safari for a unique local experience.</li>
              <li>Admire Buddhist Thangka paintings in monasteries or workshops.</li>
              <li>Go fossil searching in Hikkim and Langza for a unique memento.</li>
              <li>Attend local festivals and engage with warm locals to learn about their culture.</li>
              <li>Send postcards from Hikkim, the highest post office in the world.</li>
              <li>Visit Gue to see the well-known Monk Mummy.</li>
              <li>Ponder by the Spiti River, throw pebbles, and soak in nature’s limitless beauty.</li>
              <li>Enjoy snow sports like skiing, snowboarding, and ice climbing at Kunzum and Rohtang Passes.</li>
            </ol>

            <h3 className="text-2xl mb-4">Types of Spiti Valley Tours</h3>
            <h4 className="text-xl mb-2">Bike Trip/Road Trip</h4>
            <p className="mb-4">
              The finest months for a car or bike trip to Spiti Valley are August and September. Routes include Manali (more challenging due to elevation changes) or Shimla-Kinnaur (easier with gradual acclimatization). Ensure you have necessary permits for a road trip.
            </p>

            <h4 className="text-xl mb-2">Group Tours/Trips</h4>
            <p className="mb-4">
              Group tours save costs, enhance safety, and make the trip more enjoyable. Ideal for motorcycle enthusiasts, families, friends, and adventure groups, they offer opportunities to meet like-minded travelers and create lifelong memories.
            </p>

            <h4 className="text-xl mb-2">Spiti Circuit Trips</h4>
            <p className="mb-4">
              Spiti Circuit tours cover Spiti Valley, Kinnaur, and parts of Himachal Pradesh, starting from Shimla or Manali. Key stops include Kalpa, Reckong Peo, Nako, Tabo, Kaza, Key Monastery, Langza, Pin Valley, Dhankar, Chandratal Lake, and Rohtang Pass.
            </p>

            <h4 className="text-xl mb-2">Honeymoon Tour</h4>
            <p className="mb-4">
              Spiti Valley offers an unconventional yet romantic honeymoon destination. Enjoy stargazing, intimate moments by the Spiti River, and activities like ice-skating or rock climbing to strengthen your bond.
            </p>

            <h3 className="text-2xl mb-4">Best Season to Visit Spiti Valley</h3>
            <h4 className="text-xl mb-2">In Summers (May to September)</h4>
            <p className="mb-4">
              Summer offers clear roads, pleasant weather, and vibrant landscapes with blooming wildflowers. It’s ideal for trekking, wildlife watching, and attending local festivals like the Ladarcha Fair in Kaza.
            </p>

            <h4 className="text-xl mb-2">In Winter (November to March)</h4>
            <p className="mb-4">
              Winter transforms Spiti into a frozen wonderland with heavy snowfall and temperatures dropping to -30°C. Ideal for thrill-seekers, it offers snow sports like skiing and snowboarding, but many roads and facilities may be closed.
            </p>

            <h3 className="text-2xl mb-4">Best Month to Plan the Spiti Valley Tour</h3>
            <h4 className="text-xl mb-2">June to September</h4>
            <p className="mb-4">
              Favorable weather with open roads and mountain passes like Rohtang and Kunzum makes this period popular for sightseeing and photography.
            </p>

            <h4 className="text-xl mb-2">October to November</h4>
            <p className="mb-4">
              Offers milder weather and a quieter experience with fewer tourists, ideal for a peaceful trip.
            </p>

            <h4 className="text-xl mb-2">December to February</h4>
            <p className="mb-4">
              A winter wonderland with heavy snowfall, best for thrill-seekers despite harsh conditions and road closures.
            </p>

            <h4 className="text-xl mb-2">March to May</h4>
            <p className="mb-4">
              Warmer weather with melting snow allows easier access to destinations, offering a blend of winter and summer vibes.
            </p>

            <h3 className="text-2xl mb-4">How Much a Trip to Spiti Valley Costs</h3>
            <p className="mb-4">
              Costs vary based on trip duration, season, accommodation, food, transportation, and activities:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><b>Transportation:</b> Buses or shared taxis are cheaper; private cars or flights increase costs.</li>
              <li><b>Stay:</b> Guesthouses/homestays (INR 500-1,500/night), hotels (INR 1,500-3,500/night), high-end hotels (INR 3,500+/night).</li>
              <li><b>Food:</b> Local eateries (INR 200-500/day), mid-range meals (INR 500-1,500/day).</li>
            </ul>
            <p className="mb-4">
              Note: Paradise Uttarakhand determines costs based on budgets of over 1000 travelers.
            </p>

            <h3 className="text-2xl mb-4">Things to Carry for the Spiti Valley Tour</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li><b>Backpack:</b> Lightweight, durable, water-resistant.</li>
              <li><b>Clothing:</b> Lightweight, washable T-shirts, trekking pants, cozy underwear.</li>
              <li><b>Hygiene Essentials:</b> Face wash, soap, sanitizer, toothbrush, toothpaste, towels, tissues.</li>
              <li><b>Warm Clothes:</b> Thermals, sweaters, jackets, scarves for cold temperatures.</li>
              <li><b>Footwear:</b> Waterproof, insulated boots.</li>
              <li><b>Rain Gear:</b> Raincoats, wind-resistant jackets, waterproof backpack cover.</li>
              <li><b>Food Supplies:</b> Water, purifiers, dry snacks, energy bars.</li>
              <li><b>Medical Kit:</b> First-aid supplies, personal medications, pain relievers.</li>
              <li><b>Sleeping Gear:</b> Sleeping bag, inflated cushion.</li>
              <li><b>Trekking Equipment:</b> Tent, cooking supplies, trekking poles, torchlights.</li>
              <li><b>Electronics:</b> Camera, phone, chargers, extra SIM cards.</li>
              <li><b>Cash and Cards:</b> Extra cash due to limited ATMs.</li>
              <li><b>Documents:</b> Aadhar card, permits for restricted areas.</li>
              <li><b>Travel Insurance:</b> Covering medical emergencies, trip disruptions.</li>
            </ol>
            <p className="mb-4">
              Additional tips: Carry Diamox for AMS, avoid running at high altitudes, fill up gas (no stations between Kaza and Reckong Peo), and ensure your vehicle has extra fuel.
            </p>

            <h3 className="text-2xl mb-4">Tips for Visiting Monasteries in Spiti Valley</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Wear appropriate clothing.</li>
              <li>Remove shoes before entering prayer halls.</li>
              <li>Do not disturb monks during rituals or handle artifacts.</li>
              <li>Observe monastery schedules; avoid afternoon siestas or restricted times.</li>
              <li>Seek permission before taking photos or videos.</li>
            </ul>

            <h3 className="text-2xl mb-4">Spiti Valley Map Route</h3>
            <h4 className="text-xl mb-2">From Shimla</h4>
            <p className="mb-4">
              The most popular route, taking 10-12 hours to Reckong Peo and Kaza via bus or private vehicle. Check weather and road conditions.
            </p>

            <h4 className="text-xl mb-2">From Manali</h4>
            <p className="mb-4">
              Accessible late May to early October, this route takes 8-10 hours to Kaza via Rohtang and Kunzum Passes.
            </p>
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

      {/* Video Section */}
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

      {/* spiti cards */}
   
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1
             style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
             className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
           >
             Spiti Valley Tour Packages
           </h1>
         </div>
   
         {/* Ensure the parent container is properly styled */}
         <div
           style={{ backgroundColor: 'var(--light-green)' }}
           className="relative px-4 sm:px-6 lg:px-10 py-10"
         >
           <div className="swiper-container">
             <Swiper
               modules={[Pagination, Autoplay, Navigation]} // Ensure modules are correctly imported
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
                     <Image
                       height={400}
                       width={400}
                       src={tour.image}
                       alt={tour.title}
                       className="w-full h-56 object-cover rounded-t-xl"
                       onError={(e) => {
                         console.error(`Failed to load image: ${tour.image}`);
                         e.target.src = '/img/placeholder.jpg'; // Fallback image if loading fails
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
  return <SpitiValleyTour />;
};

export default Page;