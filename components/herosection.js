'use client'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-8"
      style={{ backgroundImage: "url('/img/shoot/pexels-quang-nguyen-vinh-2132174.jpg')" }}
    >
      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content above the overlay */}
      <div className="relative pt-30 text-center w-full max-w-4xl z-10">
        {/* Heading */}
        <h1
          style={{ fontFamily: 'kirsen' }}
          className="text-4xl pb-5 md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-200 via-green-100 to-green-100 bg-clip-text text-transparent drop-shadow-2xl"
        >
          We don't sell packages
          <br />
          <span className="block h-4 md:h-6"></span>
          We make lifetime memories
        </h1>

        {/* Search Bar */}
        <div className="pb-10 search-container mx-auto w-full max-w-xl">
          <div className="search-box bg-white/10 backdrop-blur-lg rounded-xl p-3 flex items-center gap-3 shadow-xl border border-white/10">
            <svg
              className="map-pin-icon w-6 h-6 md:w-8 md:h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <input
              type="text"
              id="searchInputLarge"
              placeholder="Search destinations..."
              className="search-input bg-transparent text-white placeholder:text-white/70 bg-clip-text outline-none flex-grow text-lg md:text-xl"
            />
            <svg
              className="search-icon w-6 h-6 md:w-8 md:h-8 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Section Beneath the Search Bar */}
        <div className="mt-8 text-white grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
          <div>
            <img src="/img/location.png" alt="Destination Icon" className="mb-4 w-10 h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">100+</h3>
            <p className="text-lg md:text-xl">Destinations</p>
          </div>
          <div>
            <img src="/img/smile.png" alt="Happy Travelers Icon" className="mb-4 w-10 h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">50K+</h3>
            <p className="text-lg md:text-xl">Happy Travelers</p>
          </div>
          <div>
            <img src="/img/star.png" alt="Ratings Icon" className="mb-4 w-10 h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">4.8/5</h3>
            <p className="text-lg md:text-xl">Ratings</p>
          </div>
          <div>
            <img src="/img/real-estate.png" alt="EMI Options Icon" className="mb-4 w-10 h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">No Cost</h3>
            <p className="text-lg md:text-xl">EMI Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
