import { combineReducers } from "redux";

import App from "./App";
import curProduct from "./curProduct";
import diary from "./diary";
import diaryEdit from "./diaryEdit";
import portionForm from "./portionForm";

const app = combineReducers({
  App,
  curProduct,
  diary,
  diaryEdit,
  portionForm
});

export default app;
