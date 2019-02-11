import { NavigationActions } from "react-navigation";

export default nav => async dispatch => {
  await nav.dispatch(NavigationActions.navigate({ routeName: "Default" }));
};
