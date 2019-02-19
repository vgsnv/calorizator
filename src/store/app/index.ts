import { combineReducers } from "redux";

import App from "./App";
import curProduct from "./curProduct";
import diary from "./diary";

const app = combineReducers({
  App,
  curProduct,
  diary
});

export default app;
