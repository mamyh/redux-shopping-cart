
import { combineReducers } from 'redux';
import ProductReducer from './products/ProductReducer';
import CartReducer from './shopping-cart/CartReducer';

const RootReducer = combineReducers({ProductReducer,CartReducer});

export default RootReducer