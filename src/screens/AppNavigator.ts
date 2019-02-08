import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    ProductsForm: ProductFormScreen
  },
  {
    initialRouteName: "Products"
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
