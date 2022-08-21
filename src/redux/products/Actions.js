import { ADDTOPRODUCTS, REMOVEPRODUCTS } from "./actionTypes"

export const addToProducts =(id)=>{
    return{
        type:ADDTOPRODUCTS,
        payload:id
    }
}
export const removeProducts=(id)=>{
    return{
        type:REMOVEPRODUCTS,
        payload:id,
    }
}