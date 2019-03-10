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

export interface PortionItem {
  portion: Meal;
  totalNutrients: ITotalNutrients;
}

export interface Props {
  totalNutrients: ITotalNutrients;
  mealsList: Array<PortionItem>;
  mealItemsByMealId: MealItemsByMealId;
  products: Products;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  private keyExtractor = item => item.portion.id;

  private renderItem = ({ item: { portion, totalNutrients } }) => {
    const itemProps = {
      title: portion.title,
      totalNutrients,
      mealItemsByMealIdItem: this.props.mealItemsByMealId[portion.id],
      products: this.props.products
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
