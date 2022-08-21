import { ADDPRODUCTSTOCART, REMOVEPRODUCTSTOCART } from './actionTypes'

const initialCarts =[]
const CartReducer = (state=initialCarts,{type,payload}) => {
   switch(type){
      case ADDPRODUCTSTOCART:{
        return[...state,state.includes(payload) === -1? payload: state.find(item=>item.id===payload.id).quantity +1]
      }
      case REMOVEPRODUCTSTOCART:{
            return[...state,state.find(item=>item.id ===payload.id).quantity - 1]
      }
      default:{
        return [...state];
      }
   }
}

export default CartReducer;