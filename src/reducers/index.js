import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import orderReducers from "./orderReducers";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  order: orderReducers,
});
