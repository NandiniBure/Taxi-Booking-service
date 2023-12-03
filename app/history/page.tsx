
import History from '@/components/History/History'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import axios from 'axios'
import { NextResponse } from 'next/server'
import React, { useEffect } from 'react'

const page = async() => {
const profile=await currentUser();
if(!profile){
    return new NextResponse("unauthorized",{status:401})
}

const ride=await db.booked.findMany({
    where:{
        userId:profile.id
    }
})

 return (
   
  <div className='  flex h-auto justify-center items-center '>
  <div className='hover:border-yellow-600 hover:border-black-900 rounded-md m-10 border h-auto  w-[40rem]'>
       {ride.map((item,index)=>(
         <History 
         key={index}
         data={item}
         />
       ))}
   </div>
   </div>
  )
}

export default page