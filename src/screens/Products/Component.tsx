import * as React from "react";

import { Page, PageTotal } from "./stylesComponents";

import ProductList from "./ProductList/List";
import ProductForm from "./ProductForm";

import { NavigationInjectedProps } from "react-navigation";

export interface Props {
  products: Array<any>;
  curProduct: Product;
}

export interface Dispatch {
  toProductsFormToEdit: (nav, id) => void;
  goBack: (nav) => void;
  submit: (nav, data) => void;
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

    const productForm = {
      curProduct: this.props.curProduct,
      goBack: this.props.goBack,
      submit: this.props.submit
    };

    return (
      <Page>
        {this.props.curProduct && <ProductForm {...productForm} />}
        {!this.props.curProduct && <ProductList {...productList} />}
      </Page>
    );
  }
}
