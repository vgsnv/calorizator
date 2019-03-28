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

import { ImageSourcePropType } from "react-native";

interface Button {
  image: ImageSourcePropType;
  onPress: () => void;
}

export interface Props {
  title: string;
  leftButton?: Button;
  rightButton?: Button;
}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  render() {
    const { title, leftButton, rightButton } = this.props;

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

        <Title>
          <TitleText>{title}</TitleText>
        </Title>
      </HeaderContainer>
    );
  }
}
