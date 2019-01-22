import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import toProductsForm from "./thunks/toProductsForm";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => {
  return {};
};

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
