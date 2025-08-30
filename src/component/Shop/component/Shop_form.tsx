import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect } from 'react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { updateFields } from '@/store/Slices/Shop_form_slice'

const ShopForm = () => {

  const dispatch=useDispatch();

const shop =useSelector((state:RootState)=>state.shop);


const handleChange = (field:keyof typeof shop, value:string|number)=>{
  dispatch(updateFields({[field]:value}));
}

useEffect(() => {
  console.log("Current Shop State:", shop)
}, [shop])

  return (
    <div className="flex justify-center w-full mt-[10%]">
      <div className="w-[80%]">
        <Card>
          <CardHeader>
            <CardTitle>Add Shop</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4">
              {/* Shopname Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="shopname">Shopname</Label>
                <Input 
                id="shopname" 
                name="shopname"
                value={shop.shopname}
                placeholder="shopname" 
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                />
              </div>

                 {/* Location Input */}
                 <div className="flex flex-col gap-2">
                <Label htmlFor="Location near of the">Location</Label>
                <Input 
                id="Location near of the" 
                name="location"
                value={shop.location}
                placeholder="location"
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                />
              </div>

                {/* owner Input */}
                  {/* Location Input */}
                  <div className="flex flex-col gap-2">
                <Label htmlFor="ownerName">OwnerName</Label>
                <Input 
                id="ownerName" 
                name="ownerName"
                value={shop.ownerName}
                placeholder="ownername"
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                />
              </div>

           

                 {/* Phone Input */}
                 <div className="flex flex-col gap-2">
                <Label htmlFor="Phone">Phone</Label>
                <Input 
                id="phone" 
                type='number'
                name="phone"
                value={shop.phone}
                placeholder="Phone" 
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                />
                
              </div>  
             
            
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Add
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ShopForm


// this is select dropdown 

 {/* Category Select */}
//  <div className="flex flex-col gap-2">
//  <Label htmlFor="category">Category</Label>
//  <Select>
//    <SelectTrigger className="w-full">
//      <SelectValue placeholder="Select category" />
//    </SelectTrigger>
//    <SelectContent>
//      <SelectItem value="chicken">Chicken</SelectItem>
//      <SelectItem value="buff">Buff</SelectItem>
//      <SelectItem value="pork">Pork</SelectItem>
//      <SelectItem value="veg">Veg</SelectItem>
//    </SelectContent>
//  </Select>
// </div>