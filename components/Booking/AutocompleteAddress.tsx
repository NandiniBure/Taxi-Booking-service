"use client"

import { destinationCordinateContext } from '@/context/Destinationcordicontext'
import { sourceCordinateContext } from '@/context/SourceCordinateContex'
import { useModal } from '@/hook/use-mode-store';
import { sourcenameContext } from '@/context/Sourcename';
import React, { useEffect, useState,useContext } from 'react'
import { destinationnameContext } from '@/context/Destinationname';
 const MAPBOX_RETRIVE_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'
 
 const SESSION_TOKEN='019c67bb-dc93-4711-88ab-3d177a3023ed'
const AutocompleteAddress = () => {

// const {data,onset}=useModal();

    const [source,setsourse]=useState<any>(null)
    const [destination,setdestination]=useState<any>(null)
    const [addresslist,setaddresslist]=useState<any>([])
    const [sourceChange,setSourceChange]=useState<any>(false)
    const [destinationChange,setDestinationChange]=useState<any>(false)

    const {sourceCordinates,setSourceCordinates}=useContext(sourceCordinateContext)
    const {destinationCordinates,setDestinationCordinates}=useContext(destinationCordinateContext)

     const{sourcename,setsourcename}=useContext(sourcenameContext)
     const {destinationname,setdestinationname}=useContext(destinationnameContext)

 

     useEffect(()=>{
       const delayDebounceFn = setTimeout(()=>{
            getAddressList()
        },100)
        
    return () => clearTimeout(delayDebounceFn)

     },[source,destination]);

    const getAddressList=async()=>{
      setaddresslist([]);
      const query=sourceChange?source:destination;
        const res=await fetch('/api/search-address?q='+query,{
            headers:{
              "Content-Type":"application/json"
            }
        });
        const result =await res.json()
        setaddresslist(result)         
    }


    const onSourceAddressClick=async(item:any)=>{
      setsourse(item.full_address)
      setsourcename(item.full_address)
      setSourceChange(false)
      setaddresslist([])
      const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
        +"?session_token="+SESSION_TOKEN
        +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)

      const result=await res.json();
    
      setSourceCordinates({
        lng:result.features[0].geometry.coordinates[0],
        lat:result.features[0].geometry.coordinates[1],
              })
    }

    const onDestinationAddressClick=async(item:any)=>{
      // onset({destination:item.full_address})
      setdestination(item.full_address)
      setdestinationname(item.full_address)
      setaddresslist([])
      setDestinationChange(false)
      const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
        +"?session_token="+SESSION_TOKEN
        +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)

      const result=await res.json();
      setDestinationCordinates({
        lng:result.features[0].geometry.coordinates[0],
        lat:result.features[0].geometry.coordinates[1],
  })
    }
  return (
    <div className=' '>
        <div className=' relative'>
            <label className=' text-gray-400'>Where From ?</label>
            <input 
            type='text'
            className=' bg-white p-1 border-[1px] w-full
            rounded-md outline-none dark:text-gray-600 focus:border-yellow-300'
            value={source}
             onChange={(e)=>{setsourse(e.target.value)
                             setSourceChange(true)
                            }}
             />
           { addresslist?.suggestions && sourceChange &&
            <div className=' shadow-md p-1 rounded-md absolute w-full bg-white'>
              { 
              addresslist?.suggestions?.map((item:any,index:number)=>(
              <h1
              onClick={()=>{onSourceAddressClick(item)}}
               className=' p-3 cursor-pointer hover:text-gray-400 '>{item.full_address}</h1>
              ))}
           </div> 
           }    

        </div>

        <div className=' relative mt-3'>
            <label className=' text-gray-400'>Where To ?</label>
            <input 
            type='text'
            value={destination}
            onChange={(e)=>{setdestination(e.target.value)
                            setDestinationChange(true)
                      }}
            className=' bg-white p-1 border-[1px] w-full
            rounded-md outline-none dark:text-gray-600 focus:border-yellow-300'/>
            { addresslist?.suggestions && destinationChange &&
            <div className=' shadow-md p-1 rounded-md absolute w-full bg-white'>
              { 
              addresslist?.suggestions?.map((item:any,index:number)=>(
              <h1
              onClick={()=>{onDestinationAddressClick(item)}}
               className=' p-3 cursor-pointer hover:text-gray-400 '>{item.full_address}</h1>
              ))}
           </div> 
           }
        </div>
    </div>
  )
}

export default AutocompleteAddress