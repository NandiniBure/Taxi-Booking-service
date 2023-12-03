"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Booking from '@/components/Booking/Booking'
import MapboxMap  from '../../components/Map/MapboxMap'
import { userLocationContext } from '@/context/UserLocationContext'
import { useEffect,useState } from 'react'
import { sourceCordinateContext } from '@/context/SourceCordinateContex'
import { destinationCordinateContext } from '@/context/Destinationcordicontext'
import { directiondataContext } from '@/context/DirectiondataContext'
import { sourcenameContext } from '@/context/Sourcename'
import { destinationnameContext } from '@/context/Destinationname'
export default function Home() {
  const [userLocation,setUserLocation]=useState<any>()
  const [sourceCordinates,setSourceCordinates]=useState<any>([])
  const [destinationCordinates,setDestinationCordinates]=useState<any>([])
  const [directiondata,setdirectiondata]=useState<any>([])
  const [sourcename,setsourcename]=useState<any>([])
  const [destinationname,setdestinationname]=useState<any>([])
  useEffect(()=>{
    getUserLocation()
  },[])

  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
       setUserLocation({
       lat:pos.coords.latitude,
       lng:pos.coords.longitude
       })     
    })
  }


  return (
    <div className=' dark:bg-[#2B2D31]  '>
      <userLocationContext.Provider value={{userLocation,setUserLocation}}>
        <sourceCordinateContext.Provider value={{sourceCordinates,setSourceCordinates}}>
        <destinationCordinateContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
          <directiondataContext.Provider  value={{directiondata,setdirectiondata}}>
          <sourcenameContext.Provider value={{sourcename,setsourcename}}>
            <destinationnameContext.Provider value={{destinationname,setdestinationname}} >
         <div className=' grid md:grid-cols-3 grid-cols-1'>
          <div className=''>
           <Booking/>
          </div>
          <div className='col-span-2  order-first md:order-last '>
            <MapboxMap/>
          </div>
         </div>
         </destinationnameContext.Provider>
         </sourcenameContext.Provider>
         </directiondataContext.Provider>
         </destinationCordinateContext.Provider>
         </sourceCordinateContext.Provider>
         </userLocationContext.Provider>
    </div>
  )
}
