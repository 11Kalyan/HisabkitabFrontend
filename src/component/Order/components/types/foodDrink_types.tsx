export interface foodDrinkTypes {

    id:number
    name:string,
    price:number,
    quantity:number,
    catagory:string,
    type:string
 
}

export interface shopName{
    id:number,
    name:String
}

export interface Fooditems{
    id:number,
    name:string,
    quantity:number
    total:number
    catagory:string,
    food_drink: string
}

export interface OrderDetailsArray{
     id:number, 
     sname:string
    items:Fooditems[],
  
}


export interface foodDrink_items{
    items:foodDrinkTypes[]
    OrderedDetails:OrderDetailsArray
    shopname:shopName[]
    
}
