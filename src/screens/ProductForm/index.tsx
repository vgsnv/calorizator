import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => {
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
