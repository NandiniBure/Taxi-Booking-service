import {auth, currentUser, redirectToSignIn} from "@clerk/nextjs"
import { db } from "@/lib/db"

export const currentprofile=async()=>{
   const profile= await currentUser();
   
   if(!profile?.id){
    return redirectToSignIn();
   }
   const user=await db.user.findFirst({
    where:{
         id:profile?.id
    }
   }
   
   )
console.log(user)
   return user;
}