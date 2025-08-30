import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decrementQuantity,addOrder } from "./Slice/Food_Drink_slice";
import { RootState } from "@/store";
import { foodDrinkTypes } from "./types/foodDrink_types";
import OrderedItems from "./Order_items";
import { Root } from "react-dom/client";

const FoodCard = ({selectcategory}) => {
  const dispatch = useDispatch();

  // These are from the slice 
  const foodList = useSelector((state: RootState) => state.foodDrink.items);
  const orderedItems=useSelector((state:RootState)=>state.foodDrink.orderedItems);

  // This is state to filter date
  const [filterData, setFilterData] = useState<foodDrinkTypes[]>([]);


  // functions
  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  useEffect(() => {
    if (selectcategory === "") {
      setFilterData(foodList);
    } else {
      const data = foodList.filter((item: foodDrinkTypes) => item.catagory === selectcategory);
      setFilterData(data);
    }
  }, [foodList, selectcategory]);




  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {filterData.map((food: foodDrinkTypes, index) => (
        <div
          key={index}
          className="w-[98%] max-w-xl mx-auto bg-white border border-gray-300 rounded-lg px-3 py-2"
        >
          <div className="flex items-center justify-between gap-2 text-sm text-gray-800">
            <span className="font-medium">{food?.name}</span>
            <span className="font-medium">{food?.price}</span>

            <div className="flex items-center gap-2">
              <button className="w-6 h-6 text-sm bg-gray-200 rounded" onClick={()=>handleIncrease(food?.id)}>–</button>
              <span>{food?.quantity}</span>
              <button
                onClick={() => handleIncrease(food?.id)}
                className="w-6 h-6 text-sm bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            {/* Add Button */}
            <button onClick={() => dispatch(addOrder(food.id))}>Add</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
