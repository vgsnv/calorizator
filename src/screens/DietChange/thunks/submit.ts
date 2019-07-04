import { NavigationActions } from 'react-navigation'

import { dietsItemsAdd } from '../../../store/app/diets'
import { mealsAdd } from '../../../store/db/meals'

import toMealsInDiet from '../../../store/coreThunks/toMealsInDiet'

const uuidv1 = require('uuid/v1')

export default (nav, data) => async (dispatch, getState) => {
  const id = uuidv1()

  await dispatch(
    mealsAdd({
      id,
      ...data,
      parentId: null,
    })
  )

  await dispatch(
    dietsItemsAdd({
      id,
      order: null,
    })
  )

  dispatch(toMealsInDiet(nav, id))
}
