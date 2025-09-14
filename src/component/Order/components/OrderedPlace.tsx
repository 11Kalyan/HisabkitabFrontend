

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { setOrderedDetails } from "./Slice/Food_Drink_slice"

const OrderedPlace = () => {
  const dispatch = useDispatch()

  const shopname = useSelector((state: RootState) => state.foodDrink.shopname)

  // Local state to track selected shop
  const [selectedShop, setSelectedShop] = React.useState<string>("")


  // this is the state from the slice to update the items like shopname , foood type and other
  const OrderedDetails = useSelector((state: RootState) => state.foodDrink.OrderedDetails)



  React.useEffect(()=>{
    console.log(OrderedDetails)
 
  },[OrderedDetails])


  return (
    <div className="pl-13">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-[90%] justify-between"
          >
            {selectedShop || "Select the Shop"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search the shop" className="h-9" />
            <CommandList>
              <CommandEmpty>No shop found.</CommandEmpty>
              <CommandGroup>
                {shopname.map((shop: any, index) => (
                  <CommandItem
                    key={shop.id || index}
                    value={shop.name}
                    onSelect={() => {
                      setSelectedShop(shop?.name)
                      dispatch(setOrderedDetails({ id: shop.id, name:shop?.name }));
                    }}
                    
                  >
                    {shop.name}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedShop === shop.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default OrderedPlace
