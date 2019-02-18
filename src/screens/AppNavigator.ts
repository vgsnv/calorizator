import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DiaryScreen from "./Diary";
import DefaultScreen from "./Default";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    Default: DefaultScreen,
    Diary: DiaryScreen
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
