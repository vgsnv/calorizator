import * as React from "react";

import { Page, BtnContainer } from "./stylesComponents";

import * as ui from "../../ui";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {}

export interface Dispatch {
  toProducts: (nav) => void;
  toDiary: (nav) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    header: null
  };

  private handleClickBtnProducts = () => {
    this.props.toProducts(this.props.navigation);
  };

  private handleClickBtnDefault = () => {
    this.props.toDiary(this.props.navigation);
  };

  render() {
    const toProducts = {
      name: "КОРЗИНА ПРОДУКТОВ",
      activeOpacity: 0.5,
      disabled: false,
      onPress: this.handleClickBtnProducts
    };

    const toDailyMenu = {
      name: "МЕНЮ НА ДЕНЬ",
      activeOpacity: 0.5,
      disabled: false,
      onPress: this.handleClickBtnDefault
    };

    return (
      <Page>
        <BtnContainer>
          <ui.Button {...toProducts} />
        </BtnContainer>
        <BtnContainer>
          <ui.Button {...toDailyMenu} />
        </BtnContainer>
      </Page>
    );
  }
}
