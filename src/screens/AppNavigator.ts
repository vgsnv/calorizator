import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import AuthScreen from "./Auth";
import ProductsScreen from "./Products";
import ProductFormScreen from "./ProductForm";
import DietsScreen from "./Diets";
import DietChangeScreen from "./DietChange";
import MealsInDietScreen from "./MealsInDiet";
import MealsChangeScreen from "./MealsChange";
import ProductsChooseScreen from "./ProductsChoose";

const HomeStack = createStackNavigator({
  Diets: DietsScreen,
  MealsInDiet: MealsInDietScreen,
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
      Auth: {
        screen: AuthScreen
      },
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
