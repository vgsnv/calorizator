import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import goBack from "./thunks/goBack";
import submit from "./thunks/submit";

import toProductsFormToEdit from "./thunks/toProductsFormToEdit";

type MapStateToProps = Props;

const getProducts = entities => {
  return Object.keys(entities).map(key => {
    return entities[key];
  });
};

const mapStateToProps = ({ app, db }): MapStateToProps => ({
  curProduct: app.curProduct,
  products: getProducts(db.products.entities)
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProductsFormToEdit: (nav, id) => dispatch(toProductsFormToEdit(nav, id)),
  goBack: nav => dispatch(goBack(nav)),
  submit: data => dispatch(submit(data))
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
