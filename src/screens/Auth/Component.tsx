import * as React from "react";

import { Page, TitleContainer, Title, Buttons } from "./stylesComponents";

import { NavigationInjectedProps } from "react-navigation";

import { LoginButton, AccessToken } from "react-native-fbsdk";

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    return (
      <Page>
        <TitleContainer>
          <Title>TEST AUTH</Title>
        </TitleContainer>

        <Buttons>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
        </Buttons>
      </Page>
    );
  }
}
