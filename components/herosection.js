'use client'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/img/shoot/pexels-quang-nguyen-vinh-2132174.jpg')" }}
    >
      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content above the overlay */}
      <div className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl z-10 pt-16 sm:pt-20 md:pt-24">
        {/* Heading */}
        <h1
          style={{ fontFamily: 'kirsen' }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-green-200 via-green-100 to-green-100 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Paradise Bliss Tours — Where Every Journey
          <br />
          <span className="block h-1 sm:h-2 md:h-4"></span>
          Begins with a Dream & Ends with a Memory
        </h1>

        {/* Search Bar */}
        <div className="search-container mx-auto w-full max-w-lg sm:max-w-xl mb-6 sm:mb-8">
          <div className="search-box bg-white/10 backdrop-blur-lg rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-xl border border-white/10">
            <svg
              className="map-pin-icon w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
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
              className="search-input bg-transparent text-white placeholder:text-white/70 outline-none flex-grow text-base sm:text-lg md:text-xl"
            />
            <svg
              className="search-icon w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white cursor-pointer"
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12 text-center text-white">
          <div>
            <img src="/img/location.png" alt="Destination Icon" className="mb-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">100+</h3>
            <p className="text-base sm:text-lg md:text-xl">Destinations</p>
          </div>
          <div>
            <img src="/img/smile.png" alt="Happy Travelers Icon" className="mb-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">50K+</h3>
            <p className="text-base sm:text-lg md:text-xl">Happy Travelers</p>
          </div>
          <div>
            <img src="/img/star.png" alt="Ratings Icon" className="mb-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">4.8/5</h3>
            <p className="text-base sm:text-lg md:text-xl">Ratings</p>
          </div>
          <div>
            <img src="/img/real-estate.png" alt="EMI Options Icon" className="mb-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">No Cost</h3>
            <p className="text-base sm:text-lg md:text-xl">EMI Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}