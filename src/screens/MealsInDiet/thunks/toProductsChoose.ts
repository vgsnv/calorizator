import { portionFormAddID } from '../../../store/app/portionForm';

import { NavigationActions } from 'react-navigation';

export default (nav, id) => async (dispatch, getState) => {
  dispatch(portionFormAddID(id));

  await nav.dispatch(
    NavigationActions.navigate({ routeName: 'ProductsChoose' })
  );
};
