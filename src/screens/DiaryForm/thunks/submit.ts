import { NavigationActions } from "react-navigation";

import { mealsAdd } from "../../../store/db/meals";
import { diaryItemsAdd } from "../../../store/app/diary";

const uuidv1 = require("uuid/v1");

export default (nav, data) => async (dispatch, getState) => {
  const id = uuidv1();

  await dispatch(
    mealsAdd({
      id,
      ...data,
      parentId: null
    })
  );

  await dispatch(
    diaryItemsAdd({
      id,
      order: null
    })
  );

  await nav.dispatch(NavigationActions.back());
};
