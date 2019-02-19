import * as React from "react";
import {
  ContainerItem,
  Item,
  TitleText,
  DetailText,
  KKText,
  Left,
  Right,
  NutrientText
} from "./stylesComponents";

import { ViewStyle } from "react-native";

export interface Props {
  id: string;
  title: string;
  totalKK: number;
  totalProtein: number;
  totalFat: number;
  totalCRBH: number;
  style?: ViewStyle;
}

export interface Dispatch {
  onPressItem: (id: string) => void;
}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  private onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <ContainerItem
        style={{
          ...this.props.style
        }}
        onPress={this.onPress}
      >
        <Item
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 3, height: 1 },
            shadowOpacity: 0.16,
            shadowRadius: 6
          }}
        >
          <TitleText>{this.props.title}</TitleText>
          <DetailText>
            <Left>
              <KKText>{this.props.totalKK}</KKText>
            </Left>
            <Right>
              <NutrientText>{this.props.totalProtein}</NutrientText>
              <NutrientText>{this.props.totalFat}</NutrientText>
              <NutrientText>{this.props.totalCRBH}</NutrientText>
            </Right>
          </DetailText>
        </Item>
      </ContainerItem>
    );
  }
}
