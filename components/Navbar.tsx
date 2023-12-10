import React from 'react'
import Image from "next/image"
import axios from 'axios'
import { UserButton,currentUser } from '@clerk/nextjs'
import { ModeToggle } from './ui/mode-toggle'
import Link from 'next/link'

const  Navbar = async() => {


  return (
    <div className='flex justify-between
    p-3 px-10 border-b-[1px] shadow-sm bg-[#F2F3F5] dark:bg-[#101820FF]'>
       <div className='flex gap-10 items-center'>
        <div className=' flex gap-4'>
            <h1 className=' font-extrabold text-4xl text-[#FEE715FF] bg-black h-[3rem] w-[6rem] text-center rounded-lg dark:bg-white'>Taxi</h1>
            <h1 className=' font-extrabold text-4xl text-gray-700 dark:text-white'>Service</h1>
        </div>
          
           <div className='hidden md:flex gap-6'>
            <Link href="/service">
               <h2 className='hover:bg-[#FEE715FF] p-2
               rounded-md cursor-pointer transition-all'>Home</h2>
            </Link>
               <Link href='/history' >
               <h2 className='hover:bg-[#FEE715FF] p-2
               rounded-md cursor-pointer transition-all'>History</h2>
               </Link>
              
               <h2 className='hover:bg-[#FEE715FF] p-2
               rounded-md cursor-pointer transition-all'>Help</h2>
           </div>
           
       </div>
       <div className='flex gap-6'>
       <UserButton afterSignOutUrl="/"/>
       <ModeToggle/>
       </div>
   </div>
  )
}

export default Navbar