import { combineReducers } from "redux";

import products from "./products";
import meals from "./meals";
import mealItems from "./mealItems";

const db = combineReducers({
  products,
  meals,
  mealItems
});

export default db;
