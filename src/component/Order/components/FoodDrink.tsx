import { Button } from '@/components/ui/button'
import { RootState } from '@/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { setOrderedDetails } from './Slice/Food_Drink_slice';

const FoodDrink = ({type,setType}) => {
  const dispatch=useDispatch();
  const food_drink=useSelector((state:RootState)=>state.foodDrink.OrderedDetails)

  return (
    <div className='flex justify-end w-[95%] '>
        <div className='w-[10em] flex justify-around'>
            <div>
                 <Button
                   onClick={()=>dispatch(setOrderedDetails({Food_drink:"food"}))}
                 >Food</Button>
            </div>

            <div>
            
                 <Button
                   onClick={()=>dispatch(setOrderedDetails({Food_drink:"drink"}))}
                 >Drink</Button>
            </div>
        </div>
    </div>
  )
}

export default FoodDrink