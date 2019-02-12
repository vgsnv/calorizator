import { curproductAdd } from "../../../store/app/curProduct";

const uuidv1 = require("uuid/v1");

export default () => async dispatch => {
  const id = uuidv1();
  dispatch(curproductAdd(id));
};
