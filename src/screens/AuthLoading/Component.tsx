import * as React from 'react';

import { NavigationInjectedProps } from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';

import { ActivityIndicator, StatusBar, View } from 'react-native';

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  public _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  public render() {
    console.log('AuthLoading');
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
