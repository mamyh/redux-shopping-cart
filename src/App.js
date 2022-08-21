import { Provider } from "react-redux";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import store from "./redux/Store";

function App() {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
            <div className="grid place-items-center">
                <h1
                    className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <Provider store={store}>

                    <Products />
                    <ShoppingCart />

                </Provider>
            </div>
        </div>
  );
}

export default App;
