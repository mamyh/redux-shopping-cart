import { applyMiddleware, createStore } from "redux";
import myLogger from "./middleware/MyLogger";
import ProductReducer from "./shopping-cart/ProducReducer";

const store = createStore(ProductReducer,applyMiddleware(myLogger));

export default store;