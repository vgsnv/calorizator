import * as React from "react";

import { Page } from "./stylesComponents";

import TotalNutrients from "./TotalNutrients";
import ProductList from "./ProductList/List";

import { TotalNutrients as ITotalNutrients } from "../../store/db/mealItems";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {
  totalNutrients: ITotalNutrients;
  productWithWeight: any;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  render() {
    const { totalNutrients, productWithWeight, navigation } = this.props;

    const ptotalNutrients = {
      totalNutrients
    };

    const productList = {
      products: productWithWeight,
      navigation: navigation
    };

    return (
      <Page>
        <TotalNutrients {...ptotalNutrients} />
        <ProductList {...productList} />
      </Page>
    );
  }
}
