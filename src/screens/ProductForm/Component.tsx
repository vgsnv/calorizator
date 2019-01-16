import * as React from "react";
import styles from "./Styles";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { NavigationInjectedProps, NavigationActions } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

const image = require("../../assets/Close.png");

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
      <View style={styles.page}>
        <View style={styles.newProductIcon}>
          <TouchableOpacity onPress={this.handleOnPressPlus}>
            <Image
              style={{
                alignSelf: "flex-end",
                height: 56,
                width: 56
              }}
              source={image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
