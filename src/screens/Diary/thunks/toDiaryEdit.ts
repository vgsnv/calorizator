import { NavigationActions } from "react-navigation";

export default (nav, id) => async dispatch => {
  await nav.dispatch(NavigationActions.navigate({ routeName: "DiaryEdit" }));
};
