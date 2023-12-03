import React from 'react'
import { Map,Marker } from 'react-map-gl'
import { useContext } from 'react'
import { userLocationContext } from '@/context/UserLocationContext'
import { sourceCordinateContext } from '@/context/SourceCordinateContex'
import { destinationCordinateContext } from '@/context/Destinationcordicontext'
const Markers = () => {
    const {userLocation,setUserLocation}=useContext(userLocationContext)
    const {sourceCordinates,setSourceCordinates}=useContext(sourceCordinateContext)
    const {destinationCordinates,setDestinationCordinates}=useContext(destinationCordinateContext)
  return (
    <div>
     <Marker
     longitude={userLocation?.lng}
      latitude={userLocation?.lat} 
      anchor="bottom" >
    <img src="./pin.png" 
    className='w-10 h-10'
    />
  </Marker>
 

 {/* source marker */}

{ sourceCordinates.length!=0 ? <Marker
     longitude={sourceCordinates?.lng}
      latitude={sourceCordinates?.lat} 
      anchor="bottom" >
    <img src="./pin.png" 
    className='w-10 h-10'
    />
  </Marker> : null}


   {/* destination cordinates */}

   { destinationCordinates.length!=0 ? <Marker
     longitude={destinationCordinates?.lng}
      latitude={destinationCordinates?.lat} 
      anchor="bottom" >
    <img src="./pin.png" 
    className='w-10 h-10'
    />
  </Marker> : null}

    </div>
  )
}

export default Markers