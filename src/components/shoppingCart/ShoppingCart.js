import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { numberWithCommas, positiveNumber } from '../../lib/library';
import Cart from './Cart';

const ShoppingCart = () => {
    const carts= useSelector((state)=>state.CartReducer);
    const totalPrice= carts.reduce((total,item)=>total + item.price,0);
    const totalProducts = carts.reduce((total,item)=>total + item.quantity,0);
    
  
  return (
    <div
                    className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
                >
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                       {
                          carts.map(item=><Cart key={item.id} cartId={item.id}/>)
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