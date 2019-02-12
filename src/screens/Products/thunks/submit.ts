import { productsAdd } from "../../../store/db/products";
import { curproductReset } from "../../../store/app/curProduct";

export default data => async (dispatch, getState) => {
  const prevState = getState();

  const existId = prevState.app.curProduct.id;

  dispatch(curproductReset());

  dispatch(
    productsAdd({
      ...data,
      id: existId
    })
  );
};
