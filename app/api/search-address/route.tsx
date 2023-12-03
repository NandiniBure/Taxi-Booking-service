import {NextResponse} from 'next/server'

const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request:any) {

    const {searchParams}=new URL(request.url);

const searchText=searchParams.get('q')
const res=await fetch('https://api.mapbox.com/search/searchbox/v1/suggest'+'?q='+searchText+'&language=en&limit=10&session_token=019c67bb-dc93-4711-88ab-3d177a3023ed&country=IN&access_token=pk.eyJ1Ijoic2lkNTV4IiwiYSI6ImNsbGdzZmxudDBqMHkzanBxNHkyYmNscXgifQ.3JrFe4DQFnrQND58lTsgXg',
{
    headers:{
        "Content-Type":"application/json"
    }
})
     const searchResult=await res.json();
    
    return NextResponse.json(searchResult)
    
}