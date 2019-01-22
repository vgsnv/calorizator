import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import toProductsForm from "./thunks/toProductsForm";

type MapStateToProps = Props;

const getProducts = entities => {
  console.log("entities", entities);
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

import Header from "./HeaderScreen";

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
