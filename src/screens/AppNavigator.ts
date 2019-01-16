import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import HomeDetailsScreen from "./HomeDetails";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    HomeDetails: HomeDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    ProductsForm: {
      screen: ProductFormScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
