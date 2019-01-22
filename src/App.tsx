import * as React from "react";

import { Provider } from "react-redux";

import AppNavigator from "./screens/AppNavigator";

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
