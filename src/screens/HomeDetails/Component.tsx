import * as React from "react";

import { Text, View } from "react-native";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "HomeDetails"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>HomeDetails Screen</Text>
      </View>
    );
  }
}
