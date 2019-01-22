import * as React from "react";

import { Page, PageTotal } from "./stylesComponents";

import ProductList from "./ProductList/List";

import { NavigationInjectedProps } from "react-navigation";

import { Products } from "../../store/db/products";

export interface Props {
  products: Array<any>;
}

export interface Dispatch {
  toProductsForm: (nav) => void;
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
    console.log("props Products screen", this.props);
    return (
      <Page>
        <PageTotal />
        <ProductList products={this.props.products} />
      </Page>
    );
  }
}
