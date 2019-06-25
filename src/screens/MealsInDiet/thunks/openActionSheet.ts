import { NavigationActions } from 'react-navigation';

import { ActionSheetIOS, Text } from 'react-native'


export default nav => async (dispatch, getState) => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Cancel', 'Редактировать', 'Remove'],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex === 1) {

        nav.dispatch(
          NavigationActions.navigate({ routeName: 'MealsChange' })
        );
      }

      if (buttonIndex === 2) {
        /* destructive action */
      }

    },
  );
};
