import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import goBack from "./thunks/goBack";

const leftImg = require("../../assets/GoBack.png");
const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: string;
  rightImg: string;
  navigation: any;
}

interface Dispatch {
  goBack: (nav) => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    this.props.goBack(this.props.navigation);
  };

  private onPressRightButton = () => {
    this.props.goBack(this.props.navigation);
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
  title: "Рационы",
  leftImg,
  rightImg
});

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav)),
  toProductsFormAdd: nav => dispatch(goBack(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
