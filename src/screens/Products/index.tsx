import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import toProductsForm from "./thunks/toProductsForm";

type MapStateToProps = Props;

const getProducts = entities => {
  return Object.keys(entities).map(key => {
    return entities[key];
  });
};

const mapStateToProps = ({ db }): MapStateToProps => ({
  products: getProducts(db.products.entities)
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProductsForm: nav => dispatch(toProductsForm(nav))
});

const headerOptions = {
  headerScreen: Header,
  gesturesEnabled: false
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
