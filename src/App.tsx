import * as React from "react";

import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import AppReducer from "./reducers";

import AppNavigator from "./screens/AppNavigator";

// export const store = createStore(
//   AppReducer,
//   {},
//   applyMiddleware(thunk, logger)
// );

import createStore from "./store";
const store = createStore({});

store.dispatch({ type: "aaa" });

class HomeScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default HomeScreen;
