import { NavigationActions } from "react-navigation";

export default nav => async (dispatch, getState) => {
  await nav.dispatch(NavigationActions.back());
};
