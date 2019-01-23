import * as React from "react";

import Input from "../../components/input";

import {
  Page,
  NewProduct,
  EmptyHeader,
  ButtonContainer
} from "./stylesComponents";

import { Image } from "react-native";

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

  state = {
    titleInput: {
      value: ""
    }
  };

  private handleOnPressPlus = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  };

  private handleOnChange = text => {
    this.setState(prevState => ({
      ...prevState,
      titleInput: {
        value: text
      }
    }));
  };

  render() {
    return (
      <Page>
        <EmptyHeader />
        <NewProduct>
          <ButtonContainer onPress={this.handleOnPressPlus}>
            <Image source={CloseIcon} />
          </ButtonContainer>

          <Input
            placeholder={"Название"}
            onChangeText={this.handleOnChange}
            value={this.state.titleInput.value}
          />
        </NewProduct>
      </Page>
    );
  }
}
