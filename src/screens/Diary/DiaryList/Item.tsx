import * as React from "react";
import { Container, Item } from "./stylesComponents";

import { Text } from "react-native";

export interface Props {}

export interface Dispatch {}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  render() {
    return (
      <Container>
        <Item>
          <Text>Hello</Text>
        </Item>
      </Container>
    );
  }
}
