import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import goBack from "./thunks/goBack";
import toProductsForm from "./thunks/toProductsForm";

const leftImg = require("../../assets/GoBack.png");
const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: string;
  rightImg: string;
}

interface Dispatch {
  goBack: (nav) => void;
  toProductsForm: (nav) => void;
  navigation: () => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    this.props.goBack(this.props.navigation);
  };

  private onPressRightButton = () => {
    this.props.toProductsForm(this.props.navigation);
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
          }
        }}
      />
    );
  }
}

const headerStateToProps = state => ({
  title: "Продукты",
  leftImg,
  rightImg
});

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav)),
  toProductsForm: nav => dispatch(toProductsForm(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
