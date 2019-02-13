import * as React from "react";
import { connect } from "react-redux";

import Header, { HeaderType } from "../../components/header";

import resetProductForm from "./thunks/resetProductForm";
import goBack from "./thunks/goBack";
import toProductsFormAdd from "./thunks/toProductsFormAdd";
import { ProductFormMode } from "../../store/app/curProduct";

const leftImg = require("../../assets/GoBack.png");
const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: string;
  rightImg: string;
  navigation: any;
  mode?: ProductFormMode;
}

interface Dispatch {
  goBack: (nav) => void;
  resetProductForm: () => void;
  toProductsFormAdd: () => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    const { mode } = this.props;
    return !!mode
      ? this.props.resetProductForm()
      : this.props.goBack(this.props.navigation);
  };

  private onPressRightButton = () => {
    this.props.toProductsFormAdd();
  };

  render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: {
            image: this.props.leftImg,
            onPress: this.onPressLeftButton
          },
          rightButton: {
            image: this.props.rightImg,
            onPress: this.onPressRightButton
          },
          headerType:
            !!this.props.mode || this.props.mode === ProductFormMode.ADD
              ? HeaderType.SMALL
              : HeaderType.BIG
        }}
      />
    );
  }
}

const headerStateToProps = ({ app, db }) => ({
  title: !!app.curProduct
    ? app.curProduct.mode === ProductFormMode.EDIT
      ? "Продукты"
      : "Продукты"
    : "Продукты",
  leftImg,
  rightImg,
  mode: !!app.curProduct ? app.curProduct.mode : null
});

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav)),
  resetProductForm: nav => dispatch(resetProductForm()),
  toProductsFormAdd: () => dispatch(toProductsFormAdd())
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
