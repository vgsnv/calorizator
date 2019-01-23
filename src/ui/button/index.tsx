import * as React from "react";
import styles from "./Styles";

import { Text, TouchableOpacity } from "react-native";

export interface Props {
  name: string;
}

export interface Dispatch {
  onPress: () => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private handleClick = () => {
    const { onPress } = this.props;

    onPress();
  };

  render() {
    const { name } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={this.handleClick}>
        <Text style={styles.buttonName}>{name}</Text>
      </TouchableOpacity>
    );
  }
}
