import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { numberWithCommas } from '../../../lib/library';
import { addToProducts } from '../../../redux/products/Actions';
import { addProductsToCart } from '../../../redux/shopping-cart/Actions';

const Product = ({product}) => {
  const dispatch =useDispatch();
  const {productName,price,quantity} = product;
  const addProductHandler=(product)=>{
    dispatch(addToProducts(product.id));
    dispatch(addProductsToCart(product));
  }
  return (
    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div className="flex justify-between px-4 items-center">
                            <div className="text-lg font-semibold">
                                <p>{productName} ({quantity||'out of stock'})</p>
                                <p className="text-gray-400 text-base">TK {numberWithCommas(price)}</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center" onClick={()=>addProductHandler(product)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
  )
}

export default Product