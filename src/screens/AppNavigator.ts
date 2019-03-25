import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DietsScreen from "./Diets";
import DietChangeScreen from "./DietChange";
import MealsScreen from "./Meals";
import MealsChangeScreen from "./MealsChange";
import ProductsChooseScreen from "./ProductsChoose";

const HomeStack = createStackNavigator({
  Diets: DietsScreen,
  Meals: MealsScreen,
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
      DietChange: {
        screen: DietChangeScreen
      },
      MealsChange: {
        screen: MealsChangeScreen
      }
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
