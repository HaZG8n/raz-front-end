import { combineReducers } from "redux";
import authReducer from "./auth";
import cartData from "./cart";
import wishListData from "./wishList";
import addProductReducers from "./addProduct";
import totalPrice from "./totalPrice";
import myProduct from "./myProduct";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartData,
  wishList: wishListData,

  addProduct: addProductReducers,
  myProduct: myProduct,
  price: totalPrice,
});

export default reducers;
