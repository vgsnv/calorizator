import { combineReducers } from "redux";

import App from "./App";
import curProduct from "./curProduct";

const app = combineReducers({
  App,
  curProduct
});

export default app;
