import * as React from "react";
import {
  Container,
  Item,
  TextContainer,
  TitleText,
  ItemText
} from "./stylesComponents";

export interface Props {
  id: string;
  title: string;
  kk: number;
  protein: number;
  fat: number;
  crbh: number;
}

export interface Dispatch {
  onPressItem: (id: string) => void;
}

interface State {}

export default class extends React.PureComponent<Props & Dispatch, State> {
  private onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <Container onPress={this.onPress}>
        <Item>
          <TextContainer>
            <TitleText>{this.props.title}</TitleText>
          </TextContainer>
          <TextContainer>
            <ItemText>{this.props.kk}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{this.props.protein}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{this.props.fat}</ItemText>
          </TextContainer>
          <TextContainer>
            <ItemText>{this.props.crbh}</ItemText>
          </TextContainer>
        </Item>
      </Container>
    );
  }
}
