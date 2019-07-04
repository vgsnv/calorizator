import { NavigationActions } from 'react-navigation'

import { updSelectedDiet } from '../app/mealsInDiet'

export default (nav, id) => async dispatch => {
  dispatch(updSelectedDiet(id))
  nav.dispatch(NavigationActions.navigate({ routeName: 'MealsInDiet' }))
}
