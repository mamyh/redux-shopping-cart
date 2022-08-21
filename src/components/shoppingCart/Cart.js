import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { positiveNumber } from '../../lib/library';

const Cart = ({id,add,remove}) => {
    const carts = useSelector(state=>state);
   
      const{name,carts}= 
    
   
  return ( 
    <div className="flex justify-between border-b-2 mb-2">
    <div className="text-lg py-2">
        <p>{name}</p>
    </div>
    <div className="text-lg py-2">
        <div
            className="flex flex-row space-x-2 w-full items-center rounded-lg"
        >
            <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center" onClick={()=>remove(id)}
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
            <p>{positiveNumber(carts)}</p>
            <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center" onClick={()=>add(id)}
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

export default Cart