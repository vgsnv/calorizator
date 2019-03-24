import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DietsScreen from "./Diets";
import DiaryFormScreen from "./DiaryForm";
import DiaryEditScreen from "./DiaryEdit";
import PortionFormScreen from "./PortionForm";
import ProductsChooseScreen from "./ProductsChoose";

const HomeStack = createStackNavigator({
  Diets: DietsScreen,
  DiaryEdit: DiaryEditScreen,
  ProductsChoose: ProductsChooseScreen
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
      },
      PortionForm: {
        screen: PortionFormScreen
      }
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
