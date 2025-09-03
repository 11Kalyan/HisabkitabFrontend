import React from 'react'
import { createSlice,PayloadAction } from '@reduxjs/toolkit'


import { ShopFormType } from '../types/Shop_types'

const initialState:ShopFormType ={
    shopname:"",
    location:"",
    phone:0,
    ownerName:"",
    
}


const ShopFromSlice =createSlice({
     name:'shop',
     initialState,
     reducers:{
        updateFields:(
            state,
            action:PayloadAction<Partial<ShopFormType>>
        )=>{
            return {...state,...action.payload}
        }
        
     }
})

export  const {updateFields}=ShopFromSlice.actions;
export default ShopFromSlice.reducer;




