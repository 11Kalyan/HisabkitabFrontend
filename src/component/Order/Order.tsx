import React, { useEffect, useState } from "react";
import OrderedPlace from "./components/OrderedPlace";
import FoodDrink from "./components/FoodDrink";
import FoodCard from "./components/Food_card";
import OrderedItems from "./components/Order_items";
import Foodcatagory from "./components/Food_Catagory";

const Order = () => {
  // it is set form the chi
  const  [selectcategory,setSelectCatagory]=useState("");
  // for filter the data either it is drink or food
  const [type,setType]=useState("")



  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex justify-between flex-row mt-8">
          <div className="w-[80%]">
            {" "}
            <OrderedPlace />{" "}
          </div>
          <div>
            <FoodDrink type={type} setType={setType} />{" "}
          </div>
        </div>

        <div className="mt-10 flex justify-center w-[80%] ">
          <Foodcatagory selectcategory={selectcategory} setSelectCatagory={setSelectCatagory}/>
        </div>

        <div className="mt-10 flex justify-center items-center w-[90%] ">
          <FoodCard  selectcategory={selectcategory} type={type}/>
        </div>



         
      </div>

      <div>
        <OrderedItems/>
      </div>
    </>
  );
};

export default Order;
