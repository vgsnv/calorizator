import * as React from "react";
import {
  Container,
  Item,
  TilteTextContainer,
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
          <TilteTextContainer>
            <TitleText>{this.props.title}</TitleText>
          </TilteTextContainer>
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
