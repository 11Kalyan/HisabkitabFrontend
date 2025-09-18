import React, { act } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { foodDrinkTypes, foodDrink_items } from "../types/foodDrink_types";
import OrderedItems from "../Order_items";

const initialState: foodDrink_items = {
  items: [
    {
      id: 1,

      name: "Chowchicken",
      price: 200,
      quantity: 1,
      catagory: "chicken",
      type: "Food",
    },
    {
      id: 1,
      name: "momo",
      price: 200,
      quantity: 1,
      catagory: "veg",
      type: "Food",
    },
    {
      id: 3,
      name: "Roll",
      price: 200,
      quantity: 1,
      catagory: "mutton",
      type: "food",
    },
    {
      id: 4,
      name: "Coca-cola",
      price: 200,
      quantity: 1,
      catagory: "mutton",
      type: "drink",
    },
    {
      id: 5,
      name: "Fruitee",
      price: 200,
      quantity: 1,
      catagory: "mutton",
      type: "drink",
    },
    {
      id: 6,
      name: "Coca-cola",
      price: 200,
      quantity: 1,
      catagory: "mutton",
      type: "drink",
    },
  ],

  shopname: [
    {
      id: 1,
      name: "riddhi siddi",
    },
    {
      id: 2,
      name: "siddi",
    },
    {
      id: 3,
      name: "giddi siddi",
    },
    {
      id: 4,
      name: "riddhi siddi",
    },
  ],

  OrderedDetails: {
    id: null,
    sname: "",

    items: [],
  },
};

const foodDrinkSlice = createSlice({
  name: "foodDrink",
  initialState,
  reducers: {
    setOrderedDetails: (state, action) => {
      state.OrderedDetails = {
        ...state.OrderedDetails,
        ...action.payload,
      };
    },

    addItems: (state, action) => {
      state.OrderedDetails.items.push(action.payload);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id == id);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeItems:(state,action)=>{
      const food=action.payload
     
      state.OrderedDetails.items = state.OrderedDetails.items.filter((i)=>(

        i.id !==food.id

      ))
        
       



    }
  },
});

export const {
  increaseQuantity,
  setOrderedDetails,
  decrementQuantity,
  addItems,
  removeItems
} = foodDrinkSlice.actions;
export default foodDrinkSlice.reducer;
