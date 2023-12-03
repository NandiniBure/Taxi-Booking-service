"use client"
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
export const Frontpage=()=> {
  return (
    <div className='relative'>
     <div className='w-full h-[17.7rem] bg-black text-center relative p-4 md:p-8 lg:p-12'>
  <h1 className='text-[#FEE715FF] text-center text-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4 md:pt-6 lg:pt-8 xl:pt-10'>
    ABOUT US
  </h1>
  <p className='border-b border-yellow-500 inline-block w-1/2 md:w-1/3 lg:w-1/4 mt-2 md:mt-4 lg:mt-6 xl:mt-3'>
    #FEE715FF
  </p>
  <p className='text-white text-sm pt-2 md:pt-4 lg:pt-6 xl:pt-8 px-2 md:px-8 lg:px-12 xl:px-16 text-center'>
    Welcome to our premier taxi booking service, where convenience meets reliability. Our mission is to seamlessly connect passengers with safe and efficient rides, ensuring a hassle-free journey every time.
  </p>
</div>


      <div className='w-full h-[25rem]  bg-[#FEE715FF] pt-2'>
        <div className='flex absolute ml-[10rem] z-20'>
        <div className='relative z-10'>
  <Image 
  src="/Car.png" 
  width={500}
  height={500}
  alt="Taxi" 
>
  </Image>
</div>

<div className='flex flex-col md:flex-col ml-4'>
  <div className='md:mt-8 md:ml-10'>
    <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Our Mission</h1>
  </div>
  <div className='mt-4 md:mt-1 md:mr-5 md:ml-0'>
    <p className='text-sm font-bold'>Our Mission is to revolutionize transportation by providing a seamless and reliable taxi booking service.</p>
  </div>
  <div className='mt-2 md:mr-5'>
    <p className='text-sm font-serif'>
      Embracing innovation, we strive to create a world where transportation is not just a necessity but a delightful experience for everyone. We are committed to connecting passengers with safe, efficient rides, ensuring a stress-free and enjoyable journey every time.
    </p>
  </div>
  <div className='text-right mr-[10rem] mt-[0.3rem]'>
    <Link href="/service">
  <button className='bg-black text-white py-2 px-4 rounded-md mt-4 md:mt-6 lg:mt-8 xl:mt-10'>
  Read More
</button>
</Link>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}