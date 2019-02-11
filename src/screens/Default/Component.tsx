import * as React from "react";

import { Page, Title } from "./stylesComponents";

import { Text } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Page>
        <Title>DEFAULT</Title>
      </Page>
    );
  }
}
