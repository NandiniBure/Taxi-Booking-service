import React from 'react'
import {Frontpage} from '@/components/Page/Frontpage'
import { initialUser } from '@/lib/initial-user'
const page = async() => {
    const user= await initialUser();
  return (
    <div>
      <Frontpage/>
    </div>
  )
}

export default page