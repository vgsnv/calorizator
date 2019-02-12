import { curproductReset } from "../../../store/app/curProduct";

export default () => async dispatch => {
  dispatch(curproductReset());
};
