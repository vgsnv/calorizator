import * as React from "react";
import { Container, Item } from "./stylesComponents";

import { Text } from "react-native";

export interface Props {
  id: string;
  title: string;
  totalKK: number;
  totalProtein: number;
  totalFat: number;
  totalCRBH: number;
}

export interface Dispatch {}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  render() {
    return (
      <Container>
        <Item>
          <Text>{this.props.title}</Text>
          <Text>{this.props.totalKK}</Text>
          <Text>{this.props.totalProtein}</Text>
          <Text>{this.props.totalFat}</Text>
          <Text>{this.props.totalCRBH}</Text>
        </Item>
      </Container>
    );
  }
}
