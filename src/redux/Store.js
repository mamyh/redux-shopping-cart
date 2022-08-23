import { applyMiddleware, createStore } from "redux";
import MyChecker from "./middleware/MyChecker";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer,applyMiddleware(MyChecker));

export default store;