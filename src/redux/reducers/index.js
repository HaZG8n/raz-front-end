import { combineReducers } from "redux";
import authReducer from "./auth";
import cartData from "./cart";
import wishListData from "./wishList";
import addProductReducer from "./addProduct";
import totalPrice from "./totalPrice";
// import myProductReducer from "./myProductReducer";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartData,
  wishList: wishListData,
  addProduct: addProductReducer,
  // myProduct: myProductReducer,
  price: totalPrice,
});

export default reducers;
