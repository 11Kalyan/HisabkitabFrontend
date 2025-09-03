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
        
    },

    ],

    shopname:[
        {
            id:1,
            name:"riddhi siddi"
        }, {
            id:2,
            name:"siddi"
        },
        {
            id:3,
            name:"giddi siddi"
        },
        {
            id:4,
            name:"riddhi siddi"
        }
    ],


      OrderedDetails:[
         {
            ShopName:"",
            Food_drink:"",
            Catagory:"",
            items:[{
                name:"",
                quantity:0,
                total:0
            }]

          
         },
      ]

    

}

    const foodDrinkSlice=createSlice({
        name:'foodDrink',
        initialState,
        reducers:{
   
            

            setOrderedDetails: (state, action) => {

             
                const { ShopName,Food_drink,Catagory} = action.payload;

              
         
                  state.OrderedDetails.push({
                    ShopName,
                    Food_drink: Food_drink || "",
                    Catagory: Catagory || "",
                    items: [{ name: "", quantity: 0, total: 0 }]
                  });
                
              
                console.log("Added shop:", ShopName);
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
            ,
            

        }
    })

    export const {increaseQuantity,decrementQuantity,setOrderedDetails}=foodDrinkSlice.actions
    export default foodDrinkSlice.reducer