import {  combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
