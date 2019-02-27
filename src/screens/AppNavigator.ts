import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DiaryScreen from "./Diary";
import DiaryFormScreen from "./DiaryForm";
import DiaryEditScreen from "./DiaryEdit";

const HomeStack = createStackNavigator({
  Diary: DiaryScreen,
  DiaryEdit: DiaryEditScreen
});

const ProductsStack = createStackNavigator({
  Products: ProductsScreen
});

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Products: ProductsStack
});

export default createAppContainer(
  createStackNavigator(
    {
      Main: BottomTabNavigator,
      ProductsForm: {
        screen: ProductFormScreen
      },
      DiaryForm: {
        screen: DiaryFormScreen
      }
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
