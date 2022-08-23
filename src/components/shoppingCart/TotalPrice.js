import React from 'react'
import { numberWithCommas, positiveNumber } from '../../lib/library';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const TotalPrice = () => {
    const carts =useSelector((state)=>state.CartReducer.carts);
  const totalPrice = carts.reduce((total,item)=>total + item.price,0)
  return (
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
  )
}

export default TotalPrice