"use client"
import Carslist from "../../data/Carslist"
import React, { useState ,useContext} from 'react'
import Image from 'next/image'
import {directiondataContext} from "@/context/DirectiondataContext"
import Cards from "./Cards"
import { useParams ,useRouter} from "next/navigation"
import qs from "query-string";
import axios from "axios"
import { sourcenameContext } from "@/context/Sourcename"
import { destinationnameContext } from "@/context/Destinationname"
const Cars = () => {
    const [selectedcar,setSelectedcar]=useState<any>()
    const {directiondata,setdirectiondata}=useContext(directiondataContext)
    const [Price,setprice]=useState<any>()
    const [name,setname]=useState<any>()
    const [payment,setpayment]=useState<any>("cash")
    const {sourcename,setsourcename}=useContext(sourcenameContext)
    const {destinationname,setdestinationname}=useContext(destinationnameContext)
   const Source=sourcename;
  const Destination=destinationname;
const data={Price,Source,Destination,name,payment}
const route=useRouter();
const handleclick=async(result:any)=>{
  try{
    console.log("jgdfkjb")
   await axios.post("/api/booking",result);
   route.push("/history")
  }catch(error){
     console.log("error in post",error)
  }
}

     const getcost=(charges:any)=>{
         return (charges*directiondata.routes[0].distance*0.000621371192).toFixed(2)
     }
     
  return (
    <div className='mt-3'>
        <h2 className=' font-semibold'>
            Select Car
        </h2>
        <div className=" grid grid-cols-3 md:grid-cols-2 ">
            {Carslist.map((item,index)=>(
               <div
                key={index}
               className={`m-2 p-2 border-[1px] rounded-md
                hover:border-[#FEE715FF] cursor-pointer
                ${index===selectedcar ? ' border-[#FEE715FF] border-[2px]' : null}` }
               onClick={()=>{setSelectedcar(index)
                setprice(getcost(item.charges))
                setname(item.name)}} >
                <Image
                src={item.image}
                alt="img"
                width={75}
                height={90}
                className=" w-full"
                />
                <h2 className=" text-[12px] text-gray-400">{item.name}</h2>
              { directiondata?.routes? 
              <span className=" float-right dark:text-white text-gray-500"> Rs.{getcost(item.charges)} /-</span>
             : null }
               </div>
            ))}
        </div>
        <Cards
        setpayment={()=>setpayment}/>
        <button
        onClick={()=>handleclick(data)}
         className=' w-full bg-[#FEE715FF] p-1 rounded-md mt-4'>Book</button>
    </div>
  )
}

export default Cars