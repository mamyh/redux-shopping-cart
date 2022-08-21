import { ADDTOPRODUCTS, REMOVEPRODUCTS } from './actionTypes';
const initialProdcts=[
    {
        id:1,
        productName:'Asus Vivobook X515MA',
        quantity:20,
        price:35500,
    },
    {
        id:2,
        productName:'Dell E1916HV 18.5 Inch',
        quantity:35,
        price:9300,
    },
    {
        id:3,
        productName:'Canon Eos 4000D 18MP',
        quantity:72,
        price:36500,
    }
]
const ProductReducer = (state=initialProdcts,{type,payload}) => {
    switch(type){
        case ADDTOPRODUCTS:{
            return state.map(item=>{
                if(item.id ===  payload){
                    return{
                        ...item,
                        quantity:item.quantity + 1,
                    }
                }
                return{
                 ...item
                }
            })
        }
        case REMOVEPRODUCTS:{
             return state.map(item=>{
                if(item.id === payload){
                    return{
                        ...item,
                        quantity:item.quantity-1
                    }
                }
                return {
                    ...item
                }
             })
        }
        default:{
            return {
                ...state,
            }
        }
    }
}

export default ProductReducer