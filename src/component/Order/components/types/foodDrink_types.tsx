export interface foodDrinkTypes {

    id:number
    name:string,
    price:number,
    quantity:number,
    catagory:string,
    type:string,
    shopname:string[]
}

export interface foodDrink_items{
    items:foodDrinkTypes[]
    OrderedItems:foodDrinkTypes[]
}
