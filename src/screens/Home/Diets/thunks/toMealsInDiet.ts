import toMealsInDiet from '../../../../store/coreThunks/toMealsInDiet'

export default (nav, id) => async dispatch => {
  dispatch(toMealsInDiet(nav, id))
}
