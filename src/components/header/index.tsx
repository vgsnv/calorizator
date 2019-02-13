import * as React from "react";
import {
  HeaderContainer,
  Nav,
  LButtonContainer,
  RButtonContainer,
  Img,
  Title,
  TitleText,
  EmptySpace
} from "./stylesComponents";

interface Button {
  image: string;
  onPress: () => void;
}

export enum HeaderType {
  SMALL = "SMALL",
  BIG = "BIG"
}

import { Animated } from "react-native";

export interface Props {
  title: string;
  headerType: HeaderType;
  leftButton?: Button;
  rightButton?: Button;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  state = {
    headerType: HeaderType.BIG,
    TitleTop: new Animated.Value(99),
    TitleLeft: new Animated.Value(0),
    TextSize: new Animated.Value(0)
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("getDerivedStateFromProps", nextProps, prevState);

    return {
      ...prevState,
      headerType: nextProps.headerType
    };
  };

  componentDidUpdate = () => {
    if (this.state.headerType === HeaderType.SMALL) {
      Animated.parallel([
        Animated.timing(this.state.TitleTop, {
          toValue: 40,
          duration: 300
        }),
        Animated.timing(this.state.TitleLeft, {
          toValue: 20,
          duration: 300
        }),
        Animated.timing(this.state.TextSize, {
          toValue: 1,
          duration: 300
        })
      ]).start();
    }

    if (this.state.headerType === HeaderType.BIG) {
      Animated.parallel([
        Animated.timing(this.state.TitleTop, {
          toValue: 99,
          duration: 300
        }),
        Animated.timing(this.state.TitleLeft, {
          toValue: 0,
          duration: 300
        }),
        Animated.timing(this.state.TextSize, {
          toValue: 0,
          duration: 300
        })
      ]).start();
    }
  };

  render() {
    const { title, leftButton, rightButton } = this.props;

    const textSize = this.state.TextSize.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [38, 30, 25]
    });

    return (
      <HeaderContainer>
        <EmptySpace />
        <Nav>
          {leftButton && (
            <LButtonContainer onPress={leftButton.onPress}>
              <Img source={leftButton.image} />
            </LButtonContainer>
          )}
          {rightButton && (
            <RButtonContainer onPress={rightButton.onPress}>
              <Img source={rightButton.image} />
            </RButtonContainer>
          )}
        </Nav>

        <Title
          as={Animated.View}
          style={{
            top: this.state.TitleTop,
            left: this.state.TitleLeft
          }}
        >
          <TitleText
            as={Animated.Text}
            style={{
              fontSize: textSize
            }}
          >
            {title}
          </TitleText>
        </Title>
      </HeaderContainer>
    );
  }
}
