import * as React from 'react';

import { Buttons, Page, Title, TitleContainer } from './stylesComponents';

import AsyncStorage from '@react-native-community/async-storage';

import { AccessToken, LoginButton } from 'react-native-fbsdk';
import { NavigationInjectedProps } from 'react-navigation';

export interface Props {}

export interface Dispatch {
  onLoginFinished: (nav) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  public render() {
    return (
      <Page>
        <TitleContainer>
          <Title>PROFILE</Title>
        </TitleContainer>

        <Buttons>
          <LoginButton
            onLoginFinished={(error, result) => {}}
            onLogoutFinished={() => {
              AsyncStorage.removeItem('userToken');
              this.props.onLoginFinished(this.props.navigation);
            }}
          />
        </Buttons>
      </Page>
    );
  }
}
