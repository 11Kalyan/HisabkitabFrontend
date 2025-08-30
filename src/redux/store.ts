import { foodDrinkTypes } from './../component/Order/components/types/foodDrink_types';
import shopReducer from "../store/Slices/Shop_form_slice"
import foodDrinkReducer from  "../component/Order/components/Slice/Food_Drink_slice"

// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    shop: shopReducer,
    foodDrink:foodDrinkReducer
  },
})

// Types for useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
