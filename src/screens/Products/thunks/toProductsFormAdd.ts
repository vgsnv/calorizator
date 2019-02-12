import { NavigationActions } from "react-navigation";

import { curproductReset } from "../../../store/app/curProduct";

export default nav => async dispatch => {
  dispatch(curproductReset());

  // await nav.dispatch(NavigationActions.navigate({ routeName: "ProductsForm" }));
};
