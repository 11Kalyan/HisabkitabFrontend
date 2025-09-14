import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOrderedDetails } from "./Slice/Food_Drink_slice";

const Foodcatagory = ({ selectcategory, setSelectCatagory }) => {

  const dispatch = useDispatch()

  const handleCategory =(category:string)=>(
  dispatch(setOrderedDetails({Category:category}))
  )


  // This is for update the state  like veg chicken mutton
  const OrderedDetails = useSelector((state: RootState) => state.foodDrink.OrderedDetails)
  

  return (
    <div className="w-full flex flex-row justify-around flex-end">
      <div>
        <Button 
        onClick={()=>{
          setSelectCatagory("ve")
          handleCategory("Veg")
        }}
        
        >Veg</Button>
      </div>
      <div>
        <Button 
      onClick={()=>{
        setSelectCatagory("chicken")
        handleCategory("chicken")}
      }
        
        
       
      >Chicken</Button>
      </div>
      <div>
        <Button 
         onClick={()=>{
          setSelectCatagory("mutton")
          handleCategory("mutton")}
        }
        >Mutton</Button>
      </div>
    </div>
  );
};

export default Foodcatagory;
