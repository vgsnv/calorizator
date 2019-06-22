import { applyMiddleware, createStore } from 'redux';

import { combineReducers } from 'redux';
import app from './app';
import db from './db';

import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
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
  const persistor = persistStore(store);
  return { store, persistor };
};
