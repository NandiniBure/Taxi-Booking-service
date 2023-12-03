import React from 'react'
const History = () => {


  return (
    <div className='  flex h-screen justify-center items-center '>
        <div className='hover:border-yellow-600 hover:border-black-900 rounded-md m-10 border h-96    w-[40rem]'>
       <div className='m-12 p-2'>
       <div className=''>
        <div className='flex mb-3 justify-between'>
        <h1>Source : </h1>
        <h1>destination : </h1>
        </div>
        <div className='flex justify-between'>
        <h1>Distance : </h1>
        <h1>prise: </h1>
        </div>
        <hr className='w-[34rem] border-10  mt-3'/>
        </div>

        </div>
        </div>        
    </div>
  )
}

export default History