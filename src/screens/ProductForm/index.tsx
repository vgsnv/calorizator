import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import Header from "./HeaderScreen";

import goBack from "./thunks/goBack";
import submit from "./thunks/submit";

type MapStateToProps = Props;

const mapStateToProps = ({ app }): MapStateToProps => ({
  curProduct: app.curProduct
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  goBack: nav => dispatch(goBack(nav)),
  submit: (nav, data) => dispatch(submit(nav, data))
});

const headerOptions = {
  headerScreen: Header,
  gesturesEnabled: true
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
