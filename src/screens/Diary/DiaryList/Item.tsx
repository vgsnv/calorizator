import * as React from "react";
import { Container, Item } from "./stylesComponents";

import { Text } from "react-native";

export interface Props {
  id: string;
  title: string;
}

export interface Dispatch {}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  render() {
    return (
      <Container>
        <Item>
          <Text>{this.props.title}</Text>
        </Item>
      </Container>
    );
  }
}
