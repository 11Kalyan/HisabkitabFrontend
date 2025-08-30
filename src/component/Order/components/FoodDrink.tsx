import { Button } from '@/components/ui/button'
import React from 'react'

const FoodDrink = ({type,setType}) => {
  return (
    <div className='flex justify-end w-[95%] '>
        <div className='w-[10em] flex justify-around'>
            <div>
                 <Button
                 onClick={()=>setType("food")}
                 
                 >Food</Button>
            </div>

            <div>
                 <Button
                   onClick={()=>setType("driink")}
                 >Drink</Button>
            </div>
        </div>
    </div>
  )
}

export default FoodDrink