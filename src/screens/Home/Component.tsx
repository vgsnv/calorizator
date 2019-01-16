import * as React from "react";
import styles from "./Styles";

import { View } from "react-native";

import Button from "../../components/button";

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

  private handleClickBtnProducts = () => {
    const {
      navigation: { navigate }
    } = this.props;

    navigate("Products");
  };

  render() {
    const toProducts = {
      name: "КОРЗИНА ПРОДУКТОВ",
      onPress: this.handleClickBtnProducts
    };

    const toDailyMenu = {
      name: "МЕНЮ НА ДЕНЬ",
      onPress: this.handleClickBtnProducts
    };

    return (
      <View style={styles.page}>
        <View style={styles.gridItem} />

        <View style={[styles.gridItem, styles.itemWrap]}>
          <View style={styles.btnContainer}>
            <Button {...toProducts} />
          </View>
        </View>
        <View style={[styles.gridItem, styles.itemWrap]}>
          <View style={styles.btnContainer}>
            <Button {...toDailyMenu} />
          </View>
        </View>

        <View style={styles.gridItem} />
      </View>
    );
  }
}
