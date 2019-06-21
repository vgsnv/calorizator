import { createStore, applyMiddleware } from "redux";

import { combineReducers } from "redux";
import db from "./db";
import app from "./app";

import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const loggerMiddleware = createLogger();

export default (initialState?: {}) => {
  const store = createStore(
    persistReducer(
      persistConfig,
      combineReducers({
        db,
        app
      })
    ),
    initialState,
    applyMiddleware(thunk, loggerMiddleware)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
