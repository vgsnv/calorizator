import { NavigationActions } from 'react-navigation';

import { curproductReset } from '../../../store/app/curProduct';
import { productsAdd } from '../../../store/db/products';

export default (nav, data) => async (dispatch, getState) => {
  const prevState = getState();

  const existId = prevState.app.curProduct.id;

  dispatch(curproductReset());

  dispatch(
    productsAdd({
      ...data,
      id: existId
    })
  );

  await nav.dispatch(NavigationActions.back());
};
