import { combineReducers } from "redux";
import authReducer from "./auth";
import cartData from "./cart";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartData,
});

export default reducers;
