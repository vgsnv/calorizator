import { combineReducers } from "redux";

import products from "./products";

const db = combineReducers({
  products
});

export default db;
