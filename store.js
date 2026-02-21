import { createStore } from "redux";
import { productReducer } from "./src/tools/reducers/productReducers";

export const store=createStore(productReducer)