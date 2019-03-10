import * as React from "react";

import { Page } from "./stylesComponents";

import PortionList, { PortionItem } from "./PortionList/List";

import { Meal } from "../../store/db/meals";
import {
  MealItemsByMealId,
  TotalNutrients as ITotalNutrients
} from "../../store/db/mealItems";
import { Products } from "../../store/db/products";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {
  totalNutrients: ITotalNutrients;
  mealsList: Array<PortionItem>;
  mealItemsByMealId: MealItemsByMealId;
  products: Products;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const portionList = {
      mealsList: this.props.mealsList,
      mealItemsByMealId: this.props.mealItemsByMealId,
      products: this.props.products,
      totalNutrients: this.props.totalNutrients
    };

    return (
      <Page>
        <PortionList {...portionList} />
      </Page>
    );
  }
}
