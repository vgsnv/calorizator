import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import toProducts from "./thunks/toProducts";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProducts: nav => dispatch(toProducts(nav))
});

const headerOptions = {
  headerScreen: null
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
