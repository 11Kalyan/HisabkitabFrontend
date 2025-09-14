import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, setOrderedDetails,addItems } from "./Slice/Food_Drink_slice";
import { RootState } from "@/store";
import { foodDrinkTypes } from "./types/foodDrink_types";
import OrderedItems from "./Order_items";
import { Root } from "react-dom/client";
import { Item } from "@radix-ui/react-select";
import { toast } from "sonner"


const FoodCard = ({selectcategory,type}) => {
  const dispatch = useDispatch();

  // These are from the 
  





  const foodList = useSelector((state: RootState) => state.foodDrink.items);
  const orderedItems=useSelector((state:RootState)=>state.foodDrink.orderedItems);
  const OrderedDetails=useSelector((state:RootState)=>state.foodDrink.OrderedDetails);

  // This is state to filter date
  const [filterData, setFilterData] = useState<foodDrinkTypes[]>([]);


  // functions
  const handleIncrease = (id: number) => {

    if(OrderedDetails.name){
      dispatch(increaseQuantity(id));
  
    }else
    {
    toast.error("Select the shop", {
      description:"You cant take order without selection shop "
    })
  
  }
}

const handleCardItem=(food)=>{
  if(OrderedDetails.name){
    dispatch(addItems(food))

  }else
  {
  toast.error("Select the shop", {
    description:"You cant take order without selection shop "
  })
    
  }


}  


  useEffect(() => {

    console.log(type)
    console.log(selectcategory)
    
      if(type===""){
        setFilterData(foodList)
      }
      
      else if(type==="drink"){
        const filterType = foodList.filter((item)=>item.type==="drink")
        setFilterData(filterType)
     }
     else if(type==="food"){
      const filterType = foodList.filter((item)=>item.type==="food")
      setFilterData(filterType)
   }


   
    // if (selectcategory === "") {
    //   setFilterData(foodList);
    // } else {
    //   const data = foodList.filter((item: foodDrinkTypes) => item.catagory === selectcategory);
    //   setFilterData(data);
    // }
  }, [foodList, selectcategory,type]);




  return (
    <div className="flex flex-col gap-2 w-full">
    {filterData.map((food: foodDrinkTypes, index) => (
      <div
        key={index}
        className="w-[98%] max-w-xl mx-auto bg-white border border-gray-300 rounded-lg px-3 py-2"
      >
        <div className="flex items-center justify-between gap-4 text-sm text-gray-800">
  
          {/* 👈 Clickable area for ordering food */}
          <div
            className="flex-1 flex items-center gap-2 cursor-pointer"
            onClick={() => handleCardItem(food)}
          >
            <span className="font-medium">{food?.name}</span>
            <span className="font-medium">{food?.price}</span>
          </div>
  
          {/* Quantity controls (not clickable for ordering) */}
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 text-sm bg-gray-200 rounded">–</button>
            <span>{food?.quantity}</span>
            <button
              onClick={() => handleIncrease(food?.id)}
              className="w-6 h-6 text-sm bg-gray-200 rounded"
            >
              +
            </button>
          </div>
  
        </div>
      </div>
    ))}
  </div>
  
  
  
  
  );
};

export default FoodCard;
