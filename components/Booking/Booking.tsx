import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards'
function Booking() {
  


  return (
    <div className=' p-5'>
        <h1 className='text-[20px] font-semibold'>Booking</h1>
        <div className=' border-[1px] p-5 h-screen rounded-md'
        >
        <AutocompleteAddress/>
        <Cars/>
         {/* <Cards/> */}
   
        </div>
     
    </div>
  )
}

export default Booking