import { curproductEdit } from "../../../store/app/curProduct";
import { NavigationActions } from "react-navigation";

export default (nav, id) => async (dispatch, getState) => {
  const prevState = getState();
  const curProduct = prevState.db.products.entities[id];

  dispatch(curproductEdit(curProduct));
  await nav.dispatch(NavigationActions.navigate({ routeName: "ProductsForm" }));
};
