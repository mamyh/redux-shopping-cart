import { ADDPRODUCTSTOCART, REMOVEPRODUCTSTOCART } from './actionTypes'

const initialCarts ={
  carts:[],
 
}

const CartReducer = (state=initialCarts,{type,payload}) => {
   switch(type){
   
      case ADDPRODUCTSTOCART:{
         let copiedCarts = state.carts.map((cartItem)=>({
          ...cartItem,
         }))
        
         const itemIndex =copiedCarts.findIndex(cartItem => cartItem.id === payload.id);
         if(itemIndex > -1){
            //if item exists in the cart
            copiedCarts[itemIndex].quantity = copiedCarts[itemIndex].quantity +1;
            copiedCarts[itemIndex].price = copiedCarts[itemIndex].price + payload.price;
         }else{
          //item does not exist
          copiedCarts.push({...payload,quantity:1});
         }
        return{
          ...state,
          carts:[...copiedCarts]
        }
      
      }
      case REMOVEPRODUCTSTOCART:{
        let copiedCarts = state.carts.map((cartItem)=>({
          ...cartItem,
         }))
        
         const itemIndex =copiedCarts.findIndex(cartItem => cartItem.id === payload.id);
         if(itemIndex > -1){
            //if item exists in the cart
            copiedCarts[itemIndex].quantity = copiedCarts[itemIndex].quantity - 1;
            copiedCarts[itemIndex].price = copiedCarts[itemIndex].price - payload.price;
         }else{
          //item does not exist
          copiedCarts.push({...payload,quantity:1});
         }
         console.log('copied',copiedCarts)
        return{
          ...state,
          carts:[...copiedCarts]
        }
      
      }
    
      default:{
        return {...state};
      }
   }
}

export default CartReducer;