import * as React from "react";

import Item from "./Item";

import { FlatList } from "react-native";

import { Product } from "../../../store/db/products";

export interface Props {
  list: Array<Product>;
  navigation?: any;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private keyExtractor = item => item.id;

  private renderItem = () => {
    return <Item />;
  };

  render() {
    return (
      <FlatList
        data={this.props.list}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
