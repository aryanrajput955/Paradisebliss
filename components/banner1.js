import React from 'react'
import Image from 'next/image'
const Banner1 = () => {
  return (
    <div className='flex justify-center items-center pt-16 px-4'>
    <Image 
        className='w-full hidden md:block  max-w-[100rem] h-auto object-cover' 
        height={200} 
        width={200} 
        src="/img/banner1.jpg" 
        alt="Group Tours"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        // placeholder="blur" 
    />
</div>
  )
}

export default Banner1