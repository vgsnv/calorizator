import { productsAdd } from "../../../store/db/products";
import { curproductReset } from "../../../store/app/curProduct";

const uuidv1 = require("uuid/v1");

export default data => async (dispatch, getState) => {
  const prevState = getState();

  const existId = prevState.app.curProduct;

  if (!!existId) {
    data.id = existId.id;
    dispatch(curproductReset());
  } else {
    data.id = uuidv1();
  }

  dispatch(productsAdd(data));
};
