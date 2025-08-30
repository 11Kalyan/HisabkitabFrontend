import * as React from "react";
import { MdDashboard } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdBorderColor } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";







const Sidebar = () => {
  const[open,setOpen]=React.useState(true);

    const nav=useNavigate();

    const menuItems = [
        { label: "Dashboard", icon: <MdDashboard size={20}  />,path:'/dashboard' },
        { label: "Menu", icon: <BiSolidFoodMenu  size={20} />,path:'/menu' },
        { label: "Order", icon: <MdBorderColor size={20} />,path:'/order' },
        { label: "Shop", icon: <FaShop size={20} />,path:'/shop' },
        
      ];


 // functions
//  1.this is for sidebar navigaton on click
 const handleNav=(path:string)=>{
       nav(path)
       
 }

//  2.this is for sidebar on and off
const handleMenu=()=>{
  console.log("clicke")
 {open? setOpen(false):setOpen(true)}
  console.log(open)
}

  return (
  
     <div className={open ? "w-[30%] h-screen bg-black p-4" : "w-[10%] h-screen bg-black p"}>
      {/* Menu Container */}
        <div className=" h-[2em] w-[2em] border-1 border-white flex items-center justify-center cursor-pointer"  onClick={handleMenu}>
          {open ?   <div><GiCrossMark color="white" size={15} /></div> :   <div><GiHamburgerMenu color="white" size={20} /></div>       }
      
      
        
        </div>



      {open? <div className="flex flex-col  h-[40%] rounded justify-between pt-12 ">
        {/* Menu Item */}
        {menuItems.map((item, index) => (
   
          <div key={index} className="flex items-center gap-2 text-white text-lg w-[100%]" onClick={()=> handleNav(item.path)}>
       

            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    : <div className="flex flex-col  h-[40%] rounded justify-between pt-12 " >
        {/* Menu Item */}
        {menuItems.map((item, index) => (
   
          <div key={index} className="flex items-center gap-2 text-white text-lg w-[10%]" onClick={()=> handleNav(item.path)}>
       

            <span>{item.icon}</span>
           
          </div>
        ))}
      </div>}

      </div>
    
   
  );
};

export default Sidebar;
