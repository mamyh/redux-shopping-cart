import { ADDPRODUCTSTOCART, REMOVEPRODUCTSTOCART } from "./actionTypes"

export const addProductsToCart=(product)=>{
    return{
        type:ADDPRODUCTSTOCART,
        payload:product,
    }
}

export const removeProductsToCart=(product)=>{
    return{
        type:REMOVEPRODUCTSTOCART,
        payload:product
    }
}