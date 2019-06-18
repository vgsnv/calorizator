import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import onLoginFinished from "./thunks/onLoginFinished";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  onLoginFinished: (nav, userId) => dispatch(onLoginFinished(nav, userId))
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
