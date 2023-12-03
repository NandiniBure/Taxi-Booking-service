"use client"
import React, { useEffect } from 'react'
const History = (data:any) => {

  return (

       <div className='m-12 p-2'>
       <div className=''>
        <div className='flex mb-3 justify-between'>
        <h1>Source : {data.data.Source} </h1>
        <h1>destination : {data.data.Destination}</h1>
        </div>
        <div className='flex justify-between'>
        <h1>Vehical Type : {data.data.name}</h1>
        <h1>prise: {data.data.Price} </h1>
        </div>
        <hr className='w-[34rem] border-10  mt-3'/>
        </div>
   
        </div>
     
  )
}

export default History