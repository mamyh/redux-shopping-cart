import React from 'react'
import { useSelector } from 'react-redux'
import { positiveNumber } from '../../lib/library'

const TotalProducts = () => {
  const carts =useSelector((state)=>state.CartReducer.carts);
  const totalQuatity = carts.reduce((total,item)=>total + item.quantity,0);
  return (
    <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{positiveNumber(totalQuatity)}</p>
                            </div>
                        </div>
  )
}

export default TotalProducts