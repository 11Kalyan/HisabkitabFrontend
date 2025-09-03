import { RootState } from '@/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import { RxCross2 } from "react-icons/rx";




const OrderedItems = () => {
  const dispatch=useDispatch()
  


  // // Halndle item from the orderlist
  //  const haldleremove =(id:number)=>{
  //       dispatch(removeItem(id))
  //  }


  const OrderedDetails=useSelector((state:RootState)=>state.foodDrink.OrderedDetails);

 

  return (
    <div>
     <div className='h-[3em] w-full flex items-center justify-center'>Ordered Items</div>
     
  

    {
      OrderedDetails.map((item,index)=>(
        
        <div 
        key={index}
        className="w-[95%] max-w-md mx-auto bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between text-sm text-gray-800">
          {/* Left section: name & price */}
          <div>
            <div className="font-semibold text-base">{item?.name}</div>
            <div className="text-gray-500">{item?.quantity}</div>
          </div>
  
         =
          <div className="flex items-center gap-2">
            
           
            <button
            
            
            >
              <RxCross2 />
            </button> 
          </div>
        </div>

      </div>

      ))
    }

  <div className='w-full flex justify-center mt-5'>
   <div>
   <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
  Write Order
   </button>
   </div>
  </div>



    </div>
  )
}

export default OrderedItems