import * as React from "react";

import { Page, PageTotal } from "./stylesComponents";

import ProductList from "./ProductList/List";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {
  products: Array<any>;
}

export interface Dispatch {
  toProductsFormToEdit: (nav, id) => void;
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: "ПРОДУКТЫ"
  };

  render() {
    const productList = {
      products: this.props.products,
      toProductsFormToEdit: this.props.toProductsFormToEdit,
      navigation: this.props.navigation
    };

    return (
      <Page>
        <PageTotal />
        <ProductList {...productList} />
      </Page>
    );
  }
}
