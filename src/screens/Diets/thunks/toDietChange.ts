import { NavigationActions } from 'react-navigation';

export default nav => async dispatch => {
  nav.dispatch(NavigationActions.navigate({ routeName: 'DietChange' }));
};
