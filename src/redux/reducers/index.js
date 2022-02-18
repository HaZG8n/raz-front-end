import { combineReducers } from "redux";
import authReducer from "./auth";
import cartData from "./cart";
import wishListData from "./wishList";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartData,
  wishList: wishListData,
});

export default reducers;
