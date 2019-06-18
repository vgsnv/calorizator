import { NavigationActions } from "react-navigation";

export default (nav, userId) => async (dispatch, getState) => {
  const prevState = getState();

  console.log("userId", userId);

  await nav.dispatch(NavigationActions.navigate({ routeName: "Diets" }));
};
