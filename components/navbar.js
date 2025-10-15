'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const destinations = [
      'Uttrakhand',
      'Kerala',
      'Chardham',
      'Kashmir',
      'Goa',
      'Manali',
      'Ladakh'
    ];

    const headerInput = document.getElementById('searchInput');
    const heroInput = document.getElementById('searchInputLarge');
    const inputs = [headerInput, heroInput];

    inputs.forEach(input => {
      if (!input) return;

      let currentDestIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      function typeWriter() {
        const currentDest = destinations[currentDestIndex];

        if (isDeleting) {
          input.placeholder = currentDest.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        } else {
          input.placeholder = currentDest.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && currentCharIndex === currentDest.length) {
          isDeleting = true;
          typeSpeed = 1000;
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentDestIndex = (currentDestIndex + 1) % destinations.length;
        }

        setTimeout(typeWriter, typeSpeed);
      }

      typeWriter();
    });
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Banner */}
      <div style={{backgroundColor:"var(--color-dark)"}} className="fixed top-0 left-0 w-screen text-white text-center py-2 z-60">
        <button className="mb-0 hover:scale-105 ease-in-out transition-all">Uttarakhand & Char Dham Early Offer!</button>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-8 left-0 w-screen flex items-center justify-between p-4 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#E4DECF] shadow-lg' : 'bg-[#E4DECF]'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Desktop Layout */}
          <div style={{color:'var(--color-dark)'}} className="hidden lg:flex items-center w-full">
            <div className="flex items-center gap-4 lg:gap-5 xl:gap-8 2xl:gap-10">
              <div className="logo">
                <Link href="/">
                  <Image width={100} height={100} src="/img/logo.png" alt="Paradise Bliss Logo" className="h-12" />
                </Link>
              </div>
              <div className="contact">
                <p className="mb-0 text-sm lg:text-[15px] xl:text-lg">📞+91 8449000181</p>
              </div>
              <div className="search-container flex-grow max-w-[180px] lg:max-w-[220px] xl:max-w-[350px] 2xl:max-w-[400px]">
                <div className="search-box bg-gray-100 rounded-xl p-2 flex items-center gap-2 shadow-md border border-gray-200">
                  <svg
                    className="map-pin-icon w-5 h-5 xl:w-6 xl:h-6"
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
                    id="searchInput"
                    placeholder="Search destinations..."
                    className="search-input bg-transparent text-black placeholder:text-gray-500 text-sm lg:text-[14px] xl:text-base outline-none flex-grow"
                  />
                </div>
              </div>
            </div>

            <nav className="ms-auto">
              <ul className="flex gap-4 lg:gap-5 xl:gap-8 2xl:gap-10">
                <li>
                  <Link legacyBehavior href="/">
                    <a
                      href="#home"
                      className="relative hover:text-green-600 text-sm lg:text-[15px] xl:text-lg transition-colors duration-300 group"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </Link>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#new-year-sale"
                    className="relative hover:text-green-600 text-sm lg:text-[15px] xl:text-lg transition-colors duration-300 group"
                  >
                    New Year Sale
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-96 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h3 className="text-lg font-semibold mb-3 text-black">Indian Tours</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/indian-tours/char-dham-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Char Dham Tour Packages</a>
                          <a href="/indian-tours/spiti-valley-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Spiti Valley Tour Packages</a>
                          <a href="/indian-tours/uttarakhand-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Uttarakhand Tour Packages</a>
                          <a href="/indian-tours/kashmir-tour-package" className="block text-black hover:text-green-600 text-sm transition-colors duration-200">Kashmir Tour Packages</a>
                        </div>
                        <div>
                          <a href="/indian-tours/kerala-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Kerala Tour Packages</a>
                          <a href="/indian-tours/ladakh-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Ladakh Tour Package</a>
                          <a href="/indian-tours/rajasthan-tour-package" className="block text-black hover:text-green-600 text-sm mb-2 transition-colors duration-200">Rajasthan Tour Package</a>
                          <a href="/indian-tours/seven-sisters-tour-package" className="block text-black hover:text-green-600 text-sm transition-colors duration-200">Seven Sisters Tour Package</a>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="#domestic-trips"
                    className="relative hover:text-green-600 text-sm lg:text-[15px] xl:text-lg transition-colors duration-300 group"
                  >
                    Domestic Trips
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#upcoming-trips"
                    className="relative hover:text-green-600 text-sm lg:text-[15px] xl:text-lg transition-colors duration-300 group"
                  >
                    Upcoming Trips
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs.html"
                    className="relative hover:text-green-600 text-sm lg:text-[15px] xl:text-lg transition-colors duration-300 group"
                  >
                    Blogs
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <div className="logo">
              <Image height={100} width={100} src="/img/logo.png" alt="Paradise Bliss Logo" className="h-12" />
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+918449000181" className="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <button
                className="navbar-toggler p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-4/5 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden"
            >
              <div className="p-6">
                <div className="search-container my-4">
                  <div className="search-box bg-gray-100 rounded-full p-3 flex items-center gap-3 shadow-lg border border-gray-200">
                    <svg
                      className="map-pin-icon w-6 h-6 text-gray-600"
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
                      id="searchInput"
                      placeholder="Search destinations..."
                      className="search-input bg-transparent text-black placeholder:text-gray-500 text-base outline-none flex-grow"
                    />
                  </div>
                </div>

                <nav className="mt-2">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a
                        href="#home"
                        className="relative text-black hover:text-green-600 text-base font-medium transition-colors duration-300 group py-1"
                      >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                    <li>
                      <div className="relative">
                        <button
                          className="relative text-black hover:text-green-600 text-base font-medium transition-colors duration-300 group flex items-center w-full text-left py-1"
                          onClick={toggleDropdown}
                        >
                          New Year Sale
                          <svg
                            className={`ml-2 h-5 w-5 transform ${isDropdownOpen ? 'rotate-180' : ''} text-gray-600`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        {isDropdownOpen && (
                          <div className="mt-2 bg-gray-100 rounded-xl p-3 shadow-lg">
                            <h3 className="text-sm font-semibold mb-2 text-black">Indian Tour Packages</h3>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <a href="#kerala" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Kerala</a>
                                <a href="#goa" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Goa</a>
                                <a href="#rajasthan" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Rajasthan</a>
                                <a href="#kashmir" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Kashmir</a>
                              </div>
                              <div>
                                <a href="#uttarakhand" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Uttarakhand</a>
                                <a href="#ladakh" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Ladakh</a>
                                <a href="#manali" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Manali</a>
                                <a href="#chardham" className="block text-gray-800 hover:text-green-600 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 rounded px-2 py-1">Chardham</a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                    <li>
                      <a
                        href="#domestic-trips"
                        className="relative text-black hover:text-green-600 text-base font-medium transition-colors duration-300 group py-1"
                      >
                        Domestic Trips
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#upcoming-trips"
                        className="relative text-black hover:text-green-600 text-base font-medium transition-colors duration-300 group py-1"
                      >
                        Upcoming Trips
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs.html"
                        className="relative text-black hover:text-green-600 text-base font-medium transition-colors duration-300 group py-1"
                      >
                        Blogs
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}