import { combineReducers } from "redux";

import App from "./App";
import curProduct from "./curProduct";
import diets from "./diets";
import diaryEdit from "./diaryEdit";
import portionForm from "./portionForm";

const app = combineReducers({
  App,
  curProduct,
  diets,
  diaryEdit,
  portionForm
});

export default app;
