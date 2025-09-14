import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HardSoft } from "./miniComponents/Hard_soft"
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

const Drinkmenu = ({setDrinkFood}) => {
  return (
    <div className="flex justify-center w-full mt-[10%]">
      <div className="w-[80%]">

           <Button  className="w-[5em] h-[3em]"
           onClick={()=>setDrinkFood("food")}
           >
              Food
            </Button>

        <Card>
          <CardHeader>
            <CardTitle>Add Menu</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4">
              {/* Foodname Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="drinkName">Drinkname</Label>
                <Input id="coca-cola" placeholder="Coca-cola" />
              </div>

              <HardSoft/>

             
              {/* Price Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="Rs. 200" />
              </div>
            </form>
          </CardContent>
      <div className="flex flex-col gap-2">
          <Textarea 
          
        id="message" 
        placeholder="Type your message here..." 
        className="w-[95%] " 
      />
 </div>
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

export default Drinkmenu
