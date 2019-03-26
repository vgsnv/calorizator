import * as React from "react";

import Item from "./Item";
import TotalNutrients from "../TotalNutrients";

import {} from "./stylesComponents";

import { FlatList, View } from "react-native";

import { Meal } from "../../../store/db/meals";
import {
  MealItemsByMealId,
  TotalNutrients as ITotalNutrients
} from "../../../store/db/mealItems";
import { Products } from "../../../store/db/products";

export interface MealItem {
  portion: Meal;
  totalNutrients: ITotalNutrients;
}

export interface Props {
  totalNutrients: ITotalNutrients;
  mealsList: Array<MealItem>;
  mealItemsByMealId: MealItemsByMealId;
  products: Products;
  navigation: any;
}

export interface Dispatch {
  toProductsChoose: (nav, id) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private keyExtractor = item => item.portion.id;

  private onPressItem = (id: string) => {
    this.props.toProductsChoose(this.props.navigation, id);
  };

  private renderItem = ({ item: { portion, totalNutrients } }) => {
    const itemProps = {
      id: portion.id,
      title: portion.title,
      totalNutrients,
      mealItemsByMealIdItem: this.props.mealItemsByMealId[portion.id],
      products: this.props.products,
      onPressItem: this.onPressItem
    };
    return <Item {...itemProps} />;
  };

  private renderSeparator = () => {
    return (
      <View
        style={{
          height: 25
        }}
      />
    );
  };

  render() {
    const totalNutrients = { totalNutrients: this.props.totalNutrients };

    return (
      <FlatList
        data={this.props.mealsList}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={<TotalNutrients {...totalNutrients} />}
      />
    );
  }
}
