import * as React from "react";

import Item, { Props as DiaryItem } from "./Item";

import { FlatList } from "react-native";

export interface Props {
  diaryItems: Array<DiaryItem>;
  navigation?: any;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private keyExtractor = item => item.id;

  private renderItem = ({ item }) => {
    const itemProps = {
      id: item.id,
      title: item.title,
      totalKK: item.totalKK,
      totalProtein: item.totalProtein,
      totalFat: item.totalFat,
      totalCRBH: item.totalCRBH
    };
    return <Item {...itemProps} />;
  };

  render() {
    return (
      <FlatList
        data={this.props.diaryItems}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
