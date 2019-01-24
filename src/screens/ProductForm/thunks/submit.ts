import { NavigationActions } from "react-navigation";

import { productsAdd } from "../../../store/db/products";

export default (nav, data) => async (dispatch, getState) => {
  dispatch(productsAdd(data));
  await nav.dispatch(NavigationActions.back());
};
