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
    console.log("render props", this.props);

    const totalNutrients = { totalNutrients: this.props.totalNutrients };

    const productList = {
      products: this.props.productWithWeight,
      navigation: this.props.navigation
    };

    return (
      <Page>
        <TotalNutrients {...totalNutrients} />
        <ProductList {...productList} />
      </Page>
    );
  }
}
