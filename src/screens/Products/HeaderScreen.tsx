import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import back from "./thunks/back";
import toProductsForm from "./thunks/toProductsForm";

const leftImg = require("../../assets/Back.png");
const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: string;
  rightImg: string;
}
interface Dispatch {
  back: (nav) => void;
  toProductsForm: (nav) => void;
  navigation: () => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    this.props.back(this.props.navigation);
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
  back: nav => dispatch(back(nav)),
  toProductsForm: nav => dispatch(toProductsForm(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
