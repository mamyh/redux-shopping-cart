import { ADDTOPRODUCTS, REMOVEPRODUCTS } from "../products/actionTypes";
import { ADDPRODUCTSTOCART, REMOVEPRODUCTSTOCART } from "../shopping-cart/actionTypes";



const MyChecker=(store)=>(next)=>(action)=>{
      const products = store.getState().ProductReducer.products;
      const carts = store.getState().CartReducer.carts;
      console.log(carts)
      const items = (arr,id)=>{
         return arr.find(item=>item.id ===id)
      }
      if(action.type ===ADDTOPRODUCTS && items(products,action.payload).quantity < items(products,action.payload).initialQuantity ){
         return next(action);
      }
      if(action.type === ADDPRODUCTSTOCART ){
         if(carts.length > 0 && !items(carts,action.payload.id)){
            return next(action);
         }
         if(carts.length > 0 && items(carts,action.payload.id).quantity < items(products,action.payload.id).initialQuantity){
            return next(action);
         }
         if(carts.length ===0){
            return next(action);
         }
         
      }
      if(action.type === REMOVEPRODUCTS && items(products,action.payload).quantity > 0 ){
         return next(action);
      }
      if(action.type === REMOVEPRODUCTSTOCART && items(carts,action.payload.id).quantity > 0 ){
         return next(action);
      }
      
      
  
}

export default MyChecker;