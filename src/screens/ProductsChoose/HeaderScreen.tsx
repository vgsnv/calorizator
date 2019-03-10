import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import goBack from "./thunks/goBack";

import { ImageSourcePropType } from "react-native";

const leftImg = require("../../assets/GoBack.png");

interface Props {
  title: string;
  leftImg: ImageSourcePropType;
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

  render() {
    return (
      <Header
        {...{
          title: this.props.title,
          leftButton: {
            image: this.props.leftImg,
            onPress: this.onPressLeftButton
          },
          rightButton: null
        }}
      />
    );
  }
}

const headerStateToProps = ({ app, db }) => ({
  title: db.meals.entities[app.portionForm.portionId].title,
  leftImg
});

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
