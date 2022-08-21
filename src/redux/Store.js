import { applyMiddleware, createStore } from "redux";
import myLogger from "./middleware/MyLogger";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer,applyMiddleware(myLogger));

export default store;