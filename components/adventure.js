import Link from 'next/link';

export default function AdventureTours() {
  return (
    <div className=" container  mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      
      {/* Left Section: Heading & Subtext */}
      <div className="lg:w-[40%] text-center lg:text-left mb-10 lg:mb-0">
        <h1 style={{ fontFamily: 'salazur' }} className="text-6xl font-bold text-[#FF7F50]">
          Adventure, Your Way
        </h1>
        <p style={{fontFamily:'jost'}} className="mt-4 text-[#00453a] text-xl">
          We have a wide range of tour options to meet all your<br/> travel needs, ensuring a memorable experience for everyone.
        </p>
      </div>

      {/* Right Section: Cards */}
      <div className="lg:w-[60%] lg:pl-10  grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Group Tours Card */}
        <div className="group bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
          <img className="rounded-lg mb-4" src="/img/shoot/Group_tour.jpeg" alt="Group Tours" />
          <h2 className="text-xl font-semibold text-gray-800">Group Tours</h2>
          <p className="text-gray-600 text-sm mb-4">Travel together and create lifelong friendships,that you can never forget.</p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:px-4 group-hover:py-2 group-hover:rounded-full"
          >
            Explore
            <svg
              className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Specialty Tours Card */}
        <div className="group bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
          <img className="rounded-lg mb-4" src="/img/shoot/Group_tour.jpeg" alt="Speciality Tours" />
          <h2 className="text-xl font-semibold text-gray-800">Specialty Tours</h2>
          <p className="text-gray-600 text-sm mb-4">Experience our special tours, uniquely created to suit all your preferences.</p>
          <Link
            href="#"
            className="inline-flex items-center text-green-600 font-medium transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:px-4 group-hover:py-2 group-hover:rounded-full"
          >
            Explore
            <svg
              className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Experiences Card */}
        <div className="group bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
          <img className="rounded-lg mb-4" src="/img/experience.jpg" alt="Experiences" />
          <h2 className="text-xl font-semibold text-gray-800">Experiences</h2>
          <p className="text-gray-600 text-sm mb-4">Be part of an adventurous journey that brings you closer to nature.</p>
          <Link
            href="#"
            className="inline-flex items-center text-orange-600 font-medium transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:px-4 group-hover:py-2 group-hover:rounded-full"
          >
            Explore
            <svg
              className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
}
