import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import Cart from './Cart';
import TotalPrice from './TotalPrice';
import TotalProducts from './TotalProducts';

const ShoppingCart = () => {
    const carts= useSelector((state)=>state.CartReducer.carts);

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
                        <TotalProducts/>
                    </div>
                   <TotalPrice/>
                </div>
  )
}

export default ShoppingCart