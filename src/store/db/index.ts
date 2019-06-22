import { combineReducers } from 'redux';

import mealItems from './mealItems';
import meals from './meals';
import products from './products';

const db = combineReducers({
  products,
  meals,
  mealItems
});

export default db;
