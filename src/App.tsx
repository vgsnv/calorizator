import * as React from "react";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import AppNavigator from "./screens/AppNavigator";

import createStore from "./store";

const store = createStore();

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
