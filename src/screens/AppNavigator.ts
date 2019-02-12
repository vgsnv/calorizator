import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import DefaultScreen from "./Default";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    Default: DefaultScreen
  },
  {
    initialRouteName: "Home"
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
