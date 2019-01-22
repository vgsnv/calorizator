import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import back from "./thunks/back";
const backImg = require("../../assets/BackN.png");

interface Props {
  title: string;
  backImg: string;
}
interface Dispatch {
  back: (nav) => void;
  navigation: () => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    this.props.back(this.props.navigation);
  };

  render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: {
            image: this.props.backImg,
            onPress: this.onPressLeftButton
          },
          rightButton: null
        }}
      />
    );
  }
}

const headerStateToProps = state => ({
  title: "Продукты",
  backImg
});

const headerDispatchToProps = dispatch => ({
  back: nav => dispatch(back(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
