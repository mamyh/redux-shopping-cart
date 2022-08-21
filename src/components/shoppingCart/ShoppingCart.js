import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { numberWithCommas, positiveNumber } from '../../lib/library';
import { addProductsToCart, removeProductsToCart } from './../../redux/shopping-cart/Actions';
import Cart from './Cart';

const ShoppingCart = () => {
    const state= useSelector((state)=>state);
    const {shopProductsIds,totalPrice,totalProducts} =state;
    const dispatch = useDispatch();
    
    const addProductHandler =(id)=>{
        dispatch(addProductsToCart(id));
     }
     const removeProductHandler =(id)=>{
        dispatch(removeProductsToCart(id));
     }
  return (
    <div
                    className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
                >
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                       {
                          shopProductsIds.map(id=><Cart key={id} id={id} add={addProductHandler} remove={removeProductHandler}/>)
                       }
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{positiveNumber(totalProducts)}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">{numberWithCommas(positiveNumber(totalPrice))}</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ShoppingCart