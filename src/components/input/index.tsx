import * as React from "react";
import { Input } from "./stylesComponents";

export interface Props {
  value: string;
  placeholder: string;
}

export interface Dispatch {
  onChangeText: (text) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private handleOnChangeText = text => {
    const { onChangeText } = this.props;
    onChangeText(text);
  };

  render() {
    const { value, placeholder } = this.props;
    return (
      <Input
        value={value}
        onChangeText={text => this.handleOnChangeText(text)}
        placeholder={placeholder}
      />
    );
  }
}
