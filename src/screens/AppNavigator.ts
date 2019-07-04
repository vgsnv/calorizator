import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import AuthLoadingScreen from './AuthLoading'
import DietChangeScreen from './DietChange'
import DietsScreen from './Diets'
import MealsChangeScreen from './MealsChange'
import MealsInDietScreen from './MealsInDiet'
import ProductFormScreen from './ProductForm'
import ProductsScreen from './Products'
import ProductsChooseScreen from './ProductsChoose'
import ProfileScreen from './Profile'
import SignInScreen from './SignIn'

const HomeStack = createStackNavigator({
  Diets: DietsScreen,
  MealsInDiet: MealsInDietScreen,
  ProductsChoose: ProductsChooseScreen,
})

const ProductsStack = createStackNavigator({
  Products: ProductsScreen,
})

const Profile = createStackNavigator({
  Profile: ProfileScreen,
})

const BottomTabNavigator = createBottomTabNavigator({
  Рационы: HomeStack,
  Продукты: ProductsStack,
  Профиль: Profile,
})

const AppStack = createStackNavigator(
  {
    Main: BottomTabNavigator,
    ProductsForm: {
      screen: ProductFormScreen,
    },
    DietChange: {
      screen: DietChangeScreen,
    },
    MealsChange: {
      screen: MealsChangeScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const AuthNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default createAppContainer(AuthNavigator)
