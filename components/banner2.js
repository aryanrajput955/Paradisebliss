import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Banner2 = () => {
  return (
    <div className='flex justify-center items-center py-10 px-4'>
    <Link href="/trip-packages/chardham-yatra-delhi">
    <Image 
        className='w-full hidden md:block  max-w-[100rem] h-auto object-cover' 
        height={200} 
        width={200} 
        src="/img/banner2.jpg" 
        alt="Group Tours"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        // placeholder="blur" 
        />
        </Link>
</div>
  )
}

export default Banner2