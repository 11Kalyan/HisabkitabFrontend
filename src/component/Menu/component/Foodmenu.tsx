import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

const Foodmenu = ({setDrinkFood}) => {
  return (
    <div className="flex justify-center w-full mt-[10%]">
      <div className="w-[80%]">

         <Button  className="w-[30%] "  onClick={()=>setDrinkFood("drink")}>
                      Drink
         </Button>
        <Card>
          <CardHeader>
            <CardTitle>Add Menu</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4">
              {/* Foodname Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="foodname">Foodname</Label>
                <Input id="foodname" placeholder="Chowmin" />
              </div>

              {/* Category Select */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chicken">Chicken</SelectItem>
                    <SelectItem value="buff">Buff</SelectItem>
                    <SelectItem value="pork">Pork</SelectItem>
                    <SelectItem value="veg">Veg</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="Rs. 200" />
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

export default Foodmenu
