import { combineReducers } from "redux";

import App from "./App";
import curProduct from "./curProduct";
import diary from "./diary";
import diaryEdit from "./diaryEdit";

const app = combineReducers({
  App,
  curProduct,
  diary,
  diaryEdit
});

export default app;
