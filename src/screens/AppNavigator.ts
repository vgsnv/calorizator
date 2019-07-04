import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import AuthLoadingScreen from './Auth/AuthLoading'
import SignInScreen from './Auth/SignIn'

import DietsScreen from './Home/Diets'
import MealsInDietScreen from './Home/MealsInDiet'
import ProductsChooseScreen from './Home/ProductsChoose'

import ProductsScreen from './Products'

import DietChangeScreen from './Modals/DietChange'
import MealsChangeScreen from './Modals/MealsChange'
import ProductFormScreen from './Modals/ProductForm'

import ProfileScreen from './Profile'

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
