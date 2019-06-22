import { NavigationActions } from 'react-navigation';

import { mealsAdd } from '../../../store/db/meals';

const uuidv1 = require('uuid/v1');

export default (nav, data) => async (dispatch, getState) => {
  const store = getState();
  const currentMealId = store.app.mealsInDiet.selectedDietId;
  const id = uuidv1();

  await dispatch(
    mealsAdd({
      id,
      ...data,
      parentId: currentMealId
    })
  );

  await nav.dispatch(NavigationActions.back());
};
