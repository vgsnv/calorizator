import * as React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";

import goBack from "./thunks/goBack";
import toMealsChange from "./thunks/toMealsChange";

import { ImageSourcePropType } from "react-native";

const leftImg = require("../../assets/GoBack.png");
const rightImg = require("../../assets/Add.png");

interface Props {
  title: string;
  leftImg: ImageSourcePropType;
  rightImg: ImageSourcePropType;
  navigation: any;
}

interface Dispatch {
  goBack: (nav) => void;
  toMealsChange: (nav) => void;
}

interface State {}

class componentHeader extends React.Component<Props & Dispatch, State> {
  private onPressLeftButton = () => {
    this.props.goBack(this.props.navigation);
  };

  private onPressRightButton = () => {
    this.props.toMealsChange(this.props.navigation);
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

const headerStateToProps = ({ app, db }) => ({
  title: db.meals.entities[app.mealsInDiet.selectedDietId].title,
  leftImg,
  rightImg
});

const headerDispatchToProps = dispatch => ({
  goBack: nav => dispatch(goBack(nav)),
  toMealsChange: nav => dispatch(toMealsChange(nav))
});

export default connect(
  headerStateToProps,
  headerDispatchToProps
)(componentHeader);
