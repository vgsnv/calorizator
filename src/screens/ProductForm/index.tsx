import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import goBack from "./thunks/goBack";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  goBack: nav => dispatch(goBack(nav))
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
