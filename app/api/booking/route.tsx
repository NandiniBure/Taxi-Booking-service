import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function POST(
    req:Request
    ) {
      try{
            const {Price,Source,Destination,name,payment} =await req.json();
            const profile=await currentUser();
            
           if(!profile){
             return new NextResponse("unauthorized",{status:401})
           }


           const ride=await db.user.update({
               where:{
                id:profile.id,
               },
                data:{
                  booked:{
                     create:{
                      Price,
                      Source,
                      Destination,
                      name,
                      payment
                     }
                  } 
                }
           })
           return NextResponse.json(ride)

      }catch(error){
        console.log("booking save",error);
        return new NextResponse("internal Error",{status:500})
      }
}