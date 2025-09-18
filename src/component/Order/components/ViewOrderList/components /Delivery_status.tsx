import React, { act, useState } from "react";
import { Button } from "@/components/ui/button";

const DeliveryStatus = () => {
  const [served, setServed] = useState(false);
  const [all, setAll] = useState(false);
  const [pending, setPending] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <div>
          <Button
            onClick={() => {!all && !served ? setPending(true) :""}}
            className={pending ? "bg-yellow-500" : " "}
          >
            Pending
          </Button>
        </div>
        <div>
          <Button
         onClick={() => {!all && !pending ? setServed(true) :""}}
          className={served ? "bg-green-500" : " "}
          >Served</Button>
        </div>

        <div>
          <Button
           onClick={() => {!pending && !served ? setPending(true) :""}}
            className={all ? "bg-red-500" : " "}
          >All</Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
