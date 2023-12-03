
import React from 'react'
import {Frontpage} from '@/components/Page/Frontpage'
import { initialUser } from '@/lib/initial-user'
import { db } from '@/lib/db'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
const page = async() => {
    const user= await initialUser();
  return (
    <div>
      <Frontpage/>
    </div>
  )
}

export default page