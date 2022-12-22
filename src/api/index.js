import axios from "axios";
import { useEffect } from "react";

const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"
export const getPlacesData =async (sw, ne)=>{

  try{
    const {data:{data}} = await axios.get(URL,{
      
      params: {
       bl_latitude: sw.lat,
       tr_latitude:ne.lat,
       bl_longitude:sw.lng,
       tr_longitude:ne.lng,   
     },
     headers: {
       'X-RapidAPI-Key': 'd42dd2f99cmsh2e55e0949b8026fp18d4d6jsna0b0de922907',
       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
     }
     
   }) 
   return data
  
  
 
   
  }catch(error){
    console.log("  Hey algo anda mal aqui  puedes revisarlo  "+ error)
  }
  
}
