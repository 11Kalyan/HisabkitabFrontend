export interface foodDrinkTypes {

    id:number
    name:string,
    price:number,
    quantity:number,
    catagory:string,
 
}

export interface shopName{
    id:number,
    name:String
}

export interface Fooditems{
   
    name:string,
    quantity:number
    total:number
}

export interface OrderDetailsArray{
    ShopName:string,
    Food_drink:string,
    Catagory:string,

    items:Fooditems[],
  
}


export interface foodDrink_items{
    items:foodDrinkTypes[]
    OrderedDetails:OrderDetailsArray[]
    shopname:shopName[]
    
}
