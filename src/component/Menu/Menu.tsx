import * as  React from 'react'

import MenuTable from './component/Menu_table'
import Foodmenu from './component/Foodmenu'
import Drinkmenu from './component/DrinkMenu'

const Menu = () => {
  const [drinkFood,setDrinkFood]=React.useState("")

  return (
    <div>
   
   {drinkFood==="food"?  <Foodmenu  setDrinkFood={setDrinkFood}/> :<Drinkmenu  setDrinkFood={setDrinkFood}/>}

     
      
      <MenuTable />
    </div>
  )
}

export default Menu