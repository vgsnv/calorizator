import * as React from "react";

import {
  Page,
  NewProduct,
  EmptyHeader,
  ButtonContainer
} from "./stylesComponents";

import * as ui from "../../ui";

import { Image } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {
  goBack: (nav) => void;
}

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

  private handleOnPressClose = () => {
    this.props.goBack(this.props.navigation);
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
    const closeButton = {
      onPress: this.handleOnPressClose
    };

    const titleInput = {
      placeholder: "Название",
      onChangeText: this.handleOnChange,
      value: this.state.titleInput.value
    };

    return (
      <Page>
        <EmptyHeader />
        <NewProduct>
          <ButtonContainer {...closeButton}>
            <Image source={CloseIcon} />
          </ButtonContainer>

          <ui.Input {...titleInput} />
        </NewProduct>
      </Page>
    );
  }
}
