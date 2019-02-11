import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DefaultScreen from "./Default";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    ProductsForm: ProductFormScreen,
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
