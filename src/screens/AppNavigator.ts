import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Home";
import ProductsScreen from "./Products";
import HomeDetailsScreen from "./HomeDetails";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    HomeDetails: HomeDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
