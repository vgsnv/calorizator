import * as React from 'react';

import Item from './Item';

import { FlatList } from 'react-native';

export interface Props {
  products: any;
  navigation: any;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {

  public render() {
    return (
      <FlatList
        data={this.props.products}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
  private keyExtractor = item => item.id;

  private renderItem = ({ item }) => {
    const itemProps = {
      id: item.id,
      title: item.title,
      kk: item.kk,
      protein: item.protein,
      fat: item.fat,
      crbh: item.crbh,
      weight: item.weight
    };
    return <Item {...itemProps} />;
  };
}
