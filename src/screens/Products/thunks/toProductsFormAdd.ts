import { curproductAdd } from "../../../store/app/curProduct";
import { NavigationActions } from "react-navigation";

const uuidv1 = require("uuid/v1");

export default nav => async dispatch => {
  const id = uuidv1();
  dispatch(curproductAdd(id));
  await nav.dispatch(NavigationActions.navigate({ routeName: "ProductsForm" }));
};
