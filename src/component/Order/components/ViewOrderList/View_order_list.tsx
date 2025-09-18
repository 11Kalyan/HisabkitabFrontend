import React from "react";
import DeliveryStatus from "./components /Delivery_status";
import OrderedShopName from "./components /Ordered_shop_name";

const ViewOrder = () => {
  return (
    // Main div
    <div>
      <div className="h-15 p-5 grid grid-rows-3  gap-12">
        <div>
          <DeliveryStatus />
          
        </div>
       
       {/* list of the shop  */}
        <div>
        <OrderedShopName/>
        </div>

        
      </div>



    </div>

    
  );
};

export default ViewOrder;
