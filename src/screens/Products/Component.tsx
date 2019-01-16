import * as React from "react";
import styles from "./Styles";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { NavigationInjectedProps, NavigationActions } from "react-navigation";

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
    return (
      <View style={styles.page}>
        <View style={[styles.newProduct]}>
          <View style={styles.newProductTitle}>
            <Text style={styles.newProductTitleText}>НОВЫЙ ПРОДУКТ</Text>
          </View>
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

        <View style={styles.gridItem} />
        <View style={styles.gridItem} />
        <View style={styles.gridItem} />
        <View style={styles.gridItem} />
        <View style={styles.gridItem} />
      </View>
    );
  }
}
