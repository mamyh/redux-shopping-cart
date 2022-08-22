import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { positiveNumber } from '../../lib/library';
import { addToProducts, removeProducts } from '../../redux/products/Actions';
import { addProductsToCart, removeProductsToCart } from '../../redux/shopping-cart/Actions';

const Cart = ({cartId}) => {
    const carts = useSelector(state=>state.CartReducer);
    const cart = carts.find(item=>item.id === cartId);
    const products = useSelector(state=>state.ProductReducer);
    const dispatch = useDispatch();
      const{id,productName,quantity}= cart;
    
      const removeFromCarts=(id)=>{
       const product =products.find(item=>item.id === id)||{id}
       dispatch(removeProductsToCart(product))
       dispatch(addToProducts(id))
    }

    const addProduct=(id)=>{
        const product =products.find(item=>item.id === id)||{id}
        dispatch(addProductsToCart(product))
        dispatch(removeProducts);
    }
   
  return ( 
    <div className="flex justify-between border-b-2 mb-2">
    <div className="text-lg py-2">
        <p>{productName}</p>
    </div>
    <div className="text-lg py-2">
        <div
            className="flex flex-row space-x-2 w-full items-center rounded-lg"
        >
            <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center" onClick={()=>removeFromCarts(id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                    />
                </svg>
            </button>
            <p>{positiveNumber(quantity)}</p>
            <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center" onClick={()=>addProduct(id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </button>
        </div>
    </div>
</div>
              
  )
}

export default Cart;