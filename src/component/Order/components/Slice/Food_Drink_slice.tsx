    import React, { act } from "react";
    import { createSlice,PayloadAction } from "@reduxjs/toolkit";

    import { foodDrinkTypes,foodDrink_items  } from "../types/foodDrink_types";
import OrderedItems from "../Order_items";

    const initialState:foodDrink_items={
    items: [
    {
        id:1,
        name:"Chowchicken",
        price:200,
        quantity:1,
        catagory:"chicken",
        
        type:"food",
        shopname:["pasupati","garage","Road"]
        
    },

    ],


    OrderedItems :[]

    

}

    const foodDrinkSlice=createSlice({
        name:'foodDrink',
        initialState,
        reducers:{
    //    this is for for adding items on the orderlist (ordered item)
            addOrder:(state,action:PayloadAction<number>)=>{
                const id=action.payload;
                const item=state.items.find(item=>item.id===id);
                if(!item)  return;


                const existingOrder =state.OrderedItems.find(item=>item.id===id);

                if(existingOrder){
                    existingOrder.quantity++
                }else{
                    state.OrderedItems.push({...item})
                }

            },

            removeItem:(state,action:PayloadAction<number>)=>{
                const id=action.payload
                state.OrderedItems=state.OrderedItems.filter((item)=>item.id!==id)

            },
 



            increaseQuantity :(state,action)=>{
                const id=action.payload;
                const item=state.items.find(item=>item.id==id)

                if(item){
                    item.quantity++
                }
            },

            decrementQuantity:(state,action)=>{
                const id=action.payload;
                const item=state.items.find(item=>item.id==id)

                if(item){
                    item.quantity++
                }

            }

        }
    })

    export const {increaseQuantity,decrementQuantity,addOrder,removeItem}=foodDrinkSlice.actions
    export default foodDrinkSlice.reducer