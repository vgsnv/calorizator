import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import toDiaryForm from "./thunks/toDiaryForm";

import { ImageSourcePropType } from "react-native";

const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: ImageSourcePropType;
  rightImg: ImageSourcePropType;
  navigation: any;
}

interface Dispatch {
  toDiaryForm: (nav) => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressRightButton = () => {
    this.props.toDiaryForm(this.props.navigation);
  };

  render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: null,

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
  rightImg
});

const headerDispatchToProps = dispatch => ({
  toDiaryForm: nav => dispatch(toDiaryForm(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
