import * as React from "react";

import { Page, TitleContainer, Title } from "./stylesComponents";

import { NavigationInjectedProps } from "react-navigation";

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
          <Title>PROFILE</Title>
        </TitleContainer>
      </Page>
    );
  }
}
