import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  setOrderedDetails,
  decrementQuantity,
  addItems

} from "./Slice/Food_Drink_slice";
import { RootState } from "@/store";
import { foodDrinkTypes } from "./types/foodDrink_types";
import OrderedItems from "./Order_items";
import { Root } from "react-dom/client";
import { Item } from "@radix-ui/react-select";
import { toast } from "sonner";

const FoodCard = ({ selectcategory, type }) => {
  const dispatch = useDispatch();

  const foodList = useSelector((state: RootState) => state.foodDrink.items);
  const orderedItems = useSelector(
    (state: RootState) => state.foodDrink.orderedItems
  );
  const OrderedDetails = useSelector(
    (state: RootState) => state.foodDrink.OrderedDetails
  );
  // THis is keeping only the items from the ordered items
  const Ordered = useSelector(
    (state: RootState) => state.foodDrink.OrderedDetails.items
  );

  // This is state to filter date
  const [filterData, setFilterData] = useState<foodDrinkTypes[]>([]);

  // functions thst icrease teh items 
  const handleIncrease = (id: number) => {
    if (OrderedDetails.name) {
      dispatch(increaseQuantity(id));
    } else {
      toast.error("Select the shop", {
        description: "You cant take order without selection shop ",
      });
    }
  };


  const handleDecrease = (id: number) => {
    if (OrderedDetails.name) {
      dispatch(decrementQuantity(id));
    } else {
      toast.error("Select the shop", {
        description: "You cant take order without selection shop ",
      });
    }
  };


  // This function checks if order is already exist on the orderdr items
  // if food already exist then it dont allow to add again
  const handleCardItem = (food) => {
    const exist = Ordered.some((item) => item?.id === food?.id);
    if (exist) {
      toast.error("Items already ol the orderd", {
        description: " You can increase the quantity  ",
      });
    } else if (OrderedDetails?.name) {
      dispatch(addItems(food));
    } else {
      toast.error("Select the shop", {
        description: "You cant take order without selection shop ",
      });
    }
  };

  useEffect(() => {
    console.log(selectcategory);

    if (type === "") {
      setFilterData(foodList);
    } else if (type === "drink") {
      const filterType = foodList.filter((item) => item.type === "drink");
      setFilterData(filterType);
    } else if (type === "food") {
      const filterType = foodList.filter((item) => item.type === "food");
      setFilterData(filterType);
    }
  }, [foodList, selectcategory, type]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {filterData.map((food: foodDrinkTypes, index) => (
        <div
          key={index}
          className="w-[98%] max-w-xl mx-auto bg-white border border-gray-300 rounded-lg px-3 py-2"
        >
          <div className="flex items-center justify-between gap-4 text-sm text-gray-800">
           
            <div
              className="flex-1 flex items-center gap-2 cursor-pointer"
              onClick={() => handleCardItem(food)}
            >
              <span className="font-medium">{food?.name}</span>
              <span className="font-medium">{food?.price}</span>
            </div>

            {/* Quantity controls (not clickable for ordering) */}
            <div className="flex items-center gap-2">
              <button className="w-6 h-6 text-sm bg-gray-200 rounded"
                  onClick={() => handleDecrease(food?.id)}
              >–</button>
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
