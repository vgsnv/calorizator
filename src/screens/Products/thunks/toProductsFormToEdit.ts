import { NavigationActions } from "react-navigation";

import { curproductAdd } from "../../../store/app/curProduct";

export default (nav, id) => async (dispatch, getState) => {
  const prevState = getState();
  const curProduct = prevState.db.products.entities[id];

  dispatch(curproductAdd(curProduct));
  await nav.dispatch(NavigationActions.navigate({ routeName: "ProductsForm" }));
};
