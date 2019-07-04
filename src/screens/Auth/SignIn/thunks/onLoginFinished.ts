import AsyncStorage from '@react-native-community/async-storage'
import { NavigationActions } from 'react-navigation'

import { AccessToken } from 'react-native-fbsdk'

export default nav => async (dispatch, getState) => {
  const accessToken = await AccessToken.getCurrentAccessToken()

  await AsyncStorage.setItem('userToken', accessToken.userID)

  nav.dispatch(NavigationActions.navigate({ routeName: 'Diets' }))
}
