import * as React from "react";

import Item from "./Item";

import { FlatList } from "react-native";

import { Product } from "../../../store/db/products";

export interface Props {
  products: Array<Product>;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private keyExtractor = item => item.id;

  private onPressItem = (id: string) => {
    console.log("click by id:", id);
  };

  private renderItem = ({ item }) => {
    const props = {
      id: item.id,
      title: item.title,
      kk: item.kk,
      protein: item.protein,
      fat: item.fat,
      crbh: item.crbh,
      onPressItem: this.onPressItem
    };
    return <Item {...props} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.products}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
