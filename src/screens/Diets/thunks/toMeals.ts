import { NavigationActions } from "react-navigation";

import { diaryEditEditId } from "../../../store/app/diaryEdit";

export default (nav, id) => async dispatch => {
  dispatch(diaryEditEditId(id));
  await nav.dispatch(NavigationActions.navigate({ routeName: "Meals" }));
};
