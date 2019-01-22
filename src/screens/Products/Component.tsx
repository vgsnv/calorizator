import * as React from "react";

import { Page } from "./stylesComponents";

import { FlatList, Text } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {
  toProductsForm: (nav) => void;
}

interface State {}

const image = require("../../assets/Add.png");

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "ПРОДУКТЫ"
  };

  private handleOnPressPlus = () => {
    const { toProductsForm, navigation } = this.props;
    toProductsForm(navigation);
  };

  render() {
    return <Page />;
  }
}
