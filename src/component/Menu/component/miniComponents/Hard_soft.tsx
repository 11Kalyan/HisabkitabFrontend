import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HardSoft() {
  return (
    <Select>
        <label htmlFor="">Select the drink</label>
      <SelectTrigger className="w-[95%]">
       
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Drink</SelectLabel>
          <SelectItem value="hard">Hard</SelectItem>
          <SelectItem value="soft">Soft</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
