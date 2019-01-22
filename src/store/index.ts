import { combineReducers } from "redux";
import db from "./db";
import app from "./app";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export default (initialState?: {}) => {
  return createStore(
    combineReducers({
      db,
      app
    }),
    initialState,
    applyMiddleware(thunk, loggerMiddleware)
  );
};
