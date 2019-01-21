import * as React from "react";

import {
  Page,
  NewProduct,
  EmptyHeader,
  ButtonContainer
} from "./stylesComponents";

import { Image, TouchableOpacity } from "react-native";

import { NavigationInjectedProps, NavigationActions } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

const CloseIcon = require("../../assets/Close.png");

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "ПРОДУКТЫ"
  };

  private handleOnPressPlus = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  };

  render() {
    return (
      <Page>
        <EmptyHeader />
        <NewProduct>
          <ButtonContainer onPress={this.handleOnPressPlus}>
            <Image source={CloseIcon} />
          </ButtonContainer>
        </NewProduct>
      </Page>
    );
  }
}
