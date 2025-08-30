import { RootState } from '@/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import { RxCross2 } from "react-icons/rx";
import { removeItem } from './Slice/Food_Drink_slice';



const OrderedItems = () => {
  const dispatch=useDispatch()
  


  // Halndle item from the orderlist
   const haldleremove =(id:number)=>{
        dispatch(removeItem(id))
   }


  const orderedItems=useSelector((state:RootState)=>state.foodDrink.OrderedItems);

  useEffect(()=>{
    console.log(orderedItems)

   },[orderedItems])

  return (
    <div>
     <div className='h-[3em] w-full flex items-center justify-center'>Ordered Items</div>
     
  

    {
      orderedItems.map((item,index)=>(
        
        <div 
        key={index}
        className="w-[95%] max-w-md mx-auto bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between text-sm text-gray-800">
          {/* Left section: name & price */}
          <div>
            <div className="font-semibold text-base">{item?.name}</div>
            <div className="text-gray-500">{item?.quantity}</div>
          </div>
  
          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            
            {/* <span>{count}</span> */}
            <button
              onClick={()=>haldleremove(item?.id)}
            
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