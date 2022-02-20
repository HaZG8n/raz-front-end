import { combineReducers } from "redux";
import authReducer from "./auth";
import cartData from "./cart";
import wishListData from "./wishList";
// import addProductReducers from "./addProduct";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartData,
  wishList: wishListData,
  // addProduct: addProductReducers
});

export default reducers;
