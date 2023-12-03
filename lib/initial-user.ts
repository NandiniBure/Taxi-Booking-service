
import { currentUser,redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";


export const initialUser=async()=>{
    const profile=await currentUser();
   
    if(!profile){
        return redirectToSignIn();
    }

    const newuser=await db.user.findFirst({
      where:{
       id:profile.id
     }
    })

    if(newuser){
        return newuser
    }

    const user=await db.user.create({
        data:{
          id:profile.id,
          name: `${profile.firstName} ${profile.lastName}`,
          email:profile.emailAddresses[0].emailAddress,

        }
    })
   return user;
}