import * as React from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";
import { UpadateDilogue } from "./Update_dilogue";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MenuTable = () => {
  //    usestate to open popuop when edit button clicked on table
  const [open, setopen] = React.useState(false);

  return (
    <div>
      <div className="flex justify-around mt-4">
        <div className=" w-[40%] flex  justify-evenly ">
          <div>
            <Button>Food</Button>
          </div>
          <div>
            <Button>Drink</Button>
          </div>
        </div>

        <div>
          <Button>Manage</Button>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">S.n</TableHead>
            <TableHead>Foodname</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Remark</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Chowmin</TableCell>
            <TableCell>chicken</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-center">
              <div>
                <Checkbox />
              </div>{" "}
              <div className="ml-2">
                <CiEdit size={20} onClick={() => setopen(true)} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <UpadateDilogue open={open} onclose={() => setopen(false)} />
    </div>
  );
};

export default MenuTable;
