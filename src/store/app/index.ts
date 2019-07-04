import { combineReducers } from 'redux'

import App from './App'
import curProduct from './curProduct'
import diets from './diets'
import mealsInDiet from './mealsInDiet'
import portionForm from './portionForm'

const app = combineReducers({
  App,
  curProduct,
  diets,
  mealsInDiet,
  portionForm,
})

export default app
