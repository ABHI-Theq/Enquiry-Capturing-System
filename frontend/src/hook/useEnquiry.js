import React, { useState } from 'react'
import toast from 'react-hot-toast';

function useEnquiry() {
  const [loading,setLoading]=useState(false)

  const postdetails=async({name,emailaddress,category,message})=>{
    setLoading(true);
    try {
      const res=await fetch("/enquiry",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({name,emailaddress,category,message})
      })

      if(!res.ok){
        throw new Error(res.statusText)
      }
      
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  return {loading,postdetails}
}

export default useEnquiry