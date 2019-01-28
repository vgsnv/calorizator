import * as React from "react";
import {
  HeaderContainer,
  Header,
  ButtonContainer,
  Title,
  TitleText,
  LeftButton,
  RightButton,
  HeaderTop
} from "./stylesComponents";

import { Image } from "react-native";

interface Button {
  image: string;
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
  private renderLeftButtonImage = (onPress, image) => {
    return (
      <LeftButton onPress={onPress}>
        <Image source={image} />
      </LeftButton>
    );
  };

  private renderRightButtonImage = (onPress, image) => {
    return (
      <RightButton onPress={onPress}>
        <Image source={image} />
      </RightButton>
    );
  };

  render() {
    const { title, leftButton, rightButton } = this.props;

    return (
      <HeaderContainer>
        <HeaderTop />
        <Header>
          <ButtonContainer>
            {leftButton &&
              this.renderLeftButtonImage(leftButton.onPress, leftButton.image)}
          </ButtonContainer>

          <Title>
            <TitleText>{title}</TitleText>
          </Title>

          <ButtonContainer>
            {rightButton &&
              this.renderRightButtonImage(
                rightButton.onPress,
                rightButton.image
              )}
          </ButtonContainer>
        </Header>
      </HeaderContainer>
    );
  }
}
