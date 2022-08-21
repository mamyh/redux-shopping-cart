import ProductReducer from "../shopping-cart/ProducReducer";

const myLogger=(store)=>(next)=>(action)=>{
   let state = store.getState();
   const nextState= [action].reduce(ProductReducer,state);
   nextState.products.forEach(item=>{
      if(item.id === action.payload){
         if(item.carts > item.maxQuantity ||item.carts <=0||item.quantity > item.maxQuantity ){
             state.products= nextState.products.map(childItem=>{
                  if(childItem.id === action.payload){
                     return{
                        carts:0,
                        quantity:item.maxQuantity,
                        error:true,
                     }
                  }
                  return{
                     ...childItem
                  }
               });
               state.error=true;
             }                                                                     
         }
      
   })
   console.log(state);
   return next(action);
}

export default myLogger;