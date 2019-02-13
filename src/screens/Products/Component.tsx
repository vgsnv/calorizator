import * as React from "react";

import { Page } from "./stylesComponents";

import ProductList from "./ProductList/List";
import ProductForm from "./ProductForm";

import { LayoutAnimation, View, Dimensions } from "react-native";

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
      toProductsFormToEdit: id => {
        const cf = {
          duration: 300,
          create: {
            type: LayoutAnimation.Types.easeIn,
            // property: LayoutAnimation.Properties.opacity
            property: "scaleX"
          },
          update: {
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.linear
          }
        };
        LayoutAnimation.configureNext(cf);
        this.props.toProductsFormToEdit(id);
      },
      navigation: this.props.navigation
    };

    const productForm = {
      curProduct: this.props.curProduct,
      submit: this.props.submit
    };

    const List = this.props.curProduct
      ? {
          flex: 0,
          // backgroundColor: "yellow",
          width: 0
        }
      : {
          flex: 1
          // backgroundColor: "red"
        }; // cur

    const Form = this.props.curProduct
      ? {
          flex: 1,
          // borderLeftColor: "#bbb",
          // borderBottomWidth: 1,
          shadowColor: "#ccc",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
          // backgroundColor: "green"
        }
      : {
          flex: 0,
          // backgroundColor: "green",
          width: 0
        }; // cur

    return (
      <Page>
        {/* {this.props.curProduct && <ProductForm {...productForm} />}
        {!this.props.curProduct && <ProductList {...productList} />} */}

        <View style={List}>
          <ProductList {...productList} />
        </View>
        <View style={Form}>
          <ProductForm {...productForm} />
        </View>
      </Page>
    );
  }
}
