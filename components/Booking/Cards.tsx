"use client"
import Cardlist from '@/data/Cardlist'
import React, { useState } from 'react'
import Image from 'next/image'
const Cards = ({setpayment}:{setpayment:any}) => {
    const [activeIndex,setActiveIndex]=useState<any>()
    
  return  (
   
    <div>
        <h2 className=' text-[14px] font-medium'>Payment methods</h2>
        <div className=' grid grid-cols-5 m-1'>
           { Cardlist.map((item,index)=>(
    
               <div 
               key={index} 
               className={`w-[50px] border-[1px]
               flex items-center justify-center rounded-md mt-2
                cursor-pointer hover:scale-110 transition-all
                hover:border-yellow-400
                ${activeIndex==index ? 'border-yellow-400 border-[2px]' : null}`}
                onClick={()=>{setActiveIndex(index)
                            setpayment(item.name)
                          }
                            }>
                            
                <Image 
                src={item.image}
                alt={item.name}
                width={30}
                height={50}/>
               </div>
           ))} 
        </div>
    </div>
  )
}

export default Cards