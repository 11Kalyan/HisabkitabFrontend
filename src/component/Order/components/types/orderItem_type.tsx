export interface orderedItems {
    shopName:string
    type:string
    category:string
    foodDetails:[
        {
          name:string,
          quantity:number,
          price:number

        }
    ]
}