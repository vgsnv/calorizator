import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => {
  console.log("state products", state);
  return {};
};

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({});

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
