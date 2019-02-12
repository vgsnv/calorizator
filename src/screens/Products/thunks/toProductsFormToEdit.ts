import { curproductEdit } from "../../../store/app/curProduct";

export default id => async (dispatch, getState) => {
  const prevState = getState();
  const curProduct = prevState.db.products.entities[id];

  dispatch(curproductEdit(curProduct));
};
