import Component, { Props, Dispatch } from "./Component";

import { connect } from "react-redux";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
