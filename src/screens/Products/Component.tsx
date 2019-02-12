import * as React from "react";

import { Page } from "./stylesComponents";

import ProductList from "./ProductList/List";
import ProductForm from "./ProductForm";

import { NavigationInjectedProps } from "react-navigation";
import { Product } from "../../store/app/curProduct";

export interface Props {
  products: Array<any>;
  curProduct: Product;
}

export interface Dispatch {
  toProductsFormToEdit: (id) => void;
  goBack: (nav) => void;
  submit: (data) => void;
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
