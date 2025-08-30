import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Foodcatagory = ({ selectcategory, setSelectCatagory }) => {

  const handleClick = (value: string) => {
    setSelectCatagory(value);   // ✅ fixed with semicolon

    const frameworks = [
      { value: "Ridi shiddi", label: "Riddhi " },
      { value: "Bhim auto parts", label: "Bhim auto parts" },
      { value: "purbanchal cake parlour", label: "purbanchal cake parlour" },
      { value: "Hamro bastralaya", label: "Hamro bastralaya" },
      { value: "Najik ko o khaja ghar", label: "Najik ko o khaja ghar" },
    ];
  };

  return (
    <div className="w-full flex flex-row justify-around flex-end">
      <div>
        <Button onClick={() => handleClick("veg")}>Veg</Button>
      </div>
      <div>
        <Button onClick={() => handleClick("chicken")}>Chicken</Button>
      </div>
      <div>
        <Button onClick={() => handleClick("mutton")}>Mutton</Button>
      </div>
    </div>
  );
};

export default Foodcatagory;
