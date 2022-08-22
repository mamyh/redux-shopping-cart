import { ADDPRODUCTSTOCART, REMOVEPRODUCTSTOCART } from './actionTypes'

const initialCarts =[]
const CartReducer = (state=initialCarts,{type,payload}) => {
   switch(type){
      case ADDPRODUCTSTOCART:{
        if(state.length){
           state.map(item=>{
            if(item.id === payload.id){
              return {
                ...item,
                price:item.price+payload.price,
                quantity:item.quantity +1,
              }
            }
            return {
              ...item
            }
           })
        }else{
         return  [
            ...payload,
          ]
        }
        return ;
      }
      case REMOVEPRODUCTSTOCART:{
        if(state.length){
          state.map(item=>{
           if(item.id === payload.id){
             return {
               ...item,
               price:item.price-payload.price,
               quantity:item.quantity - 1,
             }
           }
           return {
             ...item
           }
          })
       }else{
        return  [
           {id:payload.id,productName:payload.productName,quantity:0,price:0}
         ]
       }
       return;
      }
    
      default:{
        return [...state];
      }
   }
}

export default CartReducer;